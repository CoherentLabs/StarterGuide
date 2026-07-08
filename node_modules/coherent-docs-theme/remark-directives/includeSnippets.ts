import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { mdxjs } from 'micromark-extension-mdxjs';
import { directive } from 'micromark-extension-directive';
import { directiveFromMarkdown } from 'mdast-util-directive';
import { gfm } from 'micromark-extension-gfm';
import { gfmFromMarkdown } from 'mdast-util-gfm';

import type { Root, Content, Heading } from 'mdast';
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';

type SnippetTag = "changelog" | "rendering" | "content_development" | "migration" | "core" | "unreal_engine" | 'unity';

interface TagConfig {
    title: string;
    level: 1 | 2 | 3;
}

const TAG_CONFIG: Record<SnippetTag, TagConfig> = {
    changelog: { title: "Changelog", level: 1 },
    migration: { title: "Migration guide", level: 1 },
    content_development: { title: "Content Development", level: 2 },
    core: { title: "Core", level: 2 },
    rendering: { title: "Rendering", level: 2 },
    unreal_engine: { title: "Unreal Engine", level: 2 },
    unity: { title: "Unity", level: 2 },
};

const isDev = process.env.NODE_ENV === 'development' || process.env.MODE === 'development';
const isDraftBuild = process.env.BUILD_DRAFTS === 'true';
const allowDrafts = isDev || isDraftBuild;

function getAllSnippetFiles(dirPath: string, arrayOfFiles: string[] = []) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;

    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllSnippetFiles(fullPath, arrayOfFiles);
        } else {
            if ((file.endsWith('.md') || file.endsWith('.mdx'))) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

function extractImports(node: any) {
    const imports: { name: string; source: string }[] = [];

    if (node.data && node.data.estree) {
        for (const statement of node.data.estree.body) {
            if (statement.type === 'ImportDeclaration') {
                const source = statement.source.value as string;
                for (const specifier of statement.specifiers) {
                    if (specifier.local && specifier.local.name) {
                        imports.push({ name: specifier.local.name, source });
                    }
                }
            }
        }
        return imports;
    }

    const val = node.value || '';
    const importRegex = /import\s+(?:([^,\{]+),?)?\s*(?:\{([^}]+)\})?\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(val)) !== null) {
        const defaultImport = match[1];
        const namedImports = match[2];
        const source = match[3] || 'coherent-docs-theme/components';

        if (defaultImport && defaultImport.trim()) {
            imports.push({ name: defaultImport.trim(), source });
        }

        if (namedImports) {
            const parts = namedImports.split(',');
            for (const part of parts) {
                const trimmed = part.trim();
                if (trimmed) {
                    const partsAs = trimmed.split(/\s+as\s+/);
                    const name = partsAs[partsAs.length - 1];
                    if (name) imports.push({ name: name.trim(), source });
                }
            }
        }
    }

    return imports;
}

export function remarkIncludeSnippets() {
    return (tree: Root) => {
        const declaredIdentifiers = new Set<string>();

        const missingImportsBySource = new Map<string, Set<string>>();

        visit(tree, 'mdxjsEsm', (node) => {
            const imports = extractImports(node);
            imports.forEach(imp => declaredIdentifiers.add(imp.name));
        });

        visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement, index, parent) => {
            if (node.name !== 'IncludeSnippets' || index === undefined || !parent) return;

            const attrs = Object.fromEntries(
                node.attributes.map((attr) => {
                    if ('name' in attr && 'value' in attr) {
                        return [attr.name, attr.value];
                    }
                    return [];
                })
            );

            const release = attrs.release as string;
            const tag = attrs.tag as SnippetTag;
            const noBullets = attrs.noBullets === 'true' || attrs.noBullets === true;

            const currentConfig = TAG_CONFIG[tag];
            if (!currentConfig || !release) return;

            const folderName = release === 'next_release' ? 'next_release' : `Release_${release}`;
            let releaseDir = path.resolve(`./src/content/docs/Releases/${folderName}/`);

            if (release !== 'next_release' && !fs.existsSync(releaseDir)) {
                const versionDir = path.resolve(`./src/content/docs/Releases/Version_${release}/`);
                if (fs.existsSync(versionDir)) {
                    releaseDir = versionDir;
                }
            }

            if (release === 'next_release' && !isDev) {
                parent.children.splice(index, 1);
                return index;
            }

            const injectedNodes: Content[] = [];

            if (fs.existsSync(releaseDir)) {
                const snippetFiles = getAllSnippetFiles(releaseDir);
                const matchingSnippets: Array<{ data: any; content: string }> = [];

                for (const filePath of snippetFiles) {
                    const fileContent = fs.readFileSync(filePath, 'utf-8');
                    const { data, content } = matter(fileContent);

                    if (data?.tag === tag && (data?.draft !== true || allowDrafts)) {
                        matchingSnippets.push({ data, content });
                    }
                }

                matchingSnippets.sort((a, b) => (a.data.weight || 0) - (b.data.weight || 0));

                if (matchingSnippets.length > 0) {
                    injectedNodes.push({
                        type: 'heading',
                        depth: currentConfig.level as Heading['depth'],
                        data: {
                            hProperties: {
                                id: currentConfig.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                            }
                        },
                        children: [{ type: 'text', value: currentConfig.title }]
                    } as Heading);

                    for (const snippet of matchingSnippets) {
                        if (!noBullets && snippet.data.title) {
                            injectedNodes.push({
                                type: 'heading',
                                depth: 3,
                                children: [{ type: 'text', value: snippet.data.title }]
                            } as Heading);
                        }

                        const snippetAst = fromMarkdown(snippet.content, {
                            extensions: [mdxjs(), directive(), gfm()],
                            mdastExtensions: [mdxFromMarkdown(), directiveFromMarkdown(), gfmFromMarkdown()]
                        });

                        visit(snippetAst, 'containerDirective', (directiveNode: any) => {
                            const asideType = directiveNode.name || 'note';
                            const asideTitle = asideType.charAt(0).toUpperCase() + asideType.slice(1);

                            directiveNode.type = 'mdxJsxFlowElement';
                            directiveNode.name = 'aside';
                            directiveNode.attributes = [
                                { type: 'mdxJsxAttribute', name: 'class', value: `starlight-aside starlight-aside--${asideType}` },
                                { type: 'mdxJsxAttribute', name: 'aria-label', value: asideTitle }
                            ];

                            const titleNode = {
                                type: 'mdxJsxFlowElement',
                                name: 'p',
                                attributes: [
                                    { type: 'mdxJsxAttribute', name: 'class', value: 'starlight-aside__title' },
                                    { type: 'mdxJsxAttribute', name: 'aria-hidden', value: 'true' }
                                ],
                                children: [{ type: 'text', value: asideTitle }]
                            };

                            const contentNode = {
                                type: 'mdxJsxFlowElement',
                                name: 'section',
                                attributes: [
                                    { type: 'mdxJsxAttribute', name: 'class', value: 'starlight-aside__content' }
                                ],
                                children: directiveNode.children
                            };

                            directiveNode.children = [titleNode, contentNode];
                        });

                        const cleanedChildren = snippetAst.children.filter((child: any) => {
                            if (child.type === 'mdxjsEsm') {
                                const snippetImports = extractImports(child);

                                snippetImports.forEach(({ name, source }) => {
                                    if (!declaredIdentifiers.has(name)) {
                                        if (!missingImportsBySource.has(source)) {
                                            missingImportsBySource.set(source, new Set());
                                        }
                                        missingImportsBySource.get(source)!.add(name);
                                        declaredIdentifiers.add(name);
                                    }
                                });

                                return false;
                            }
                            return true;
                        });

                        injectedNodes.push(...(cleanedChildren as Content[]));
                    }
                }
            }

            if (injectedNodes.length > 0) {
                parent.children.splice(index, 1, ...injectedNodes);
                return index + injectedNodes.length;
            } else {
                parent.children.splice(index, 1);
                return index;
            }
        });

        if (missingImportsBySource.size > 0) {
            const newImportNodes: any[] = [];

            for (const [source, namesSet] of missingImportsBySource.entries()) {
                const names = Array.from(namesSet);

                const specifiers = names.map(name => ({
                    type: 'ImportSpecifier',
                    imported: { type: 'Identifier', name: name },
                    local: { type: 'Identifier', name: name }
                }));

                newImportNodes.push({
                    type: 'mdxjsEsm',
                    value: `import { ${names.join(', ')} } from '${source}';`,
                    data: {
                        estree: {
                            type: 'Program',
                            body: [
                                {
                                    type: 'ImportDeclaration',
                                    specifiers: specifiers,
                                    source: { type: 'Literal', value: source, raw: `'${source}'` }
                                }
                            ],
                            sourceType: 'module'
                        }
                    }
                });
            }

            let insertIndex = 0;
            if (tree.children.length > 0 && tree.children[0]?.type === 'yaml') {
                insertIndex = 1;
            }

            tree.children.splice(insertIndex, 0, ...newImportNodes);
        }
    };
}