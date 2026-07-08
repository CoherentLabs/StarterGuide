import { visit } from 'unist-util-visit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const isDev = process.env.NODE_ENV === 'development' || process.env.MODE === 'development';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsDir = path.join(__dirname, '..', 'components');

function getThemeComponents(componentsDir: string): string[] {
    if (!fs.existsSync(componentsDir)) return [];
    return fs.readdirSync(componentsDir)
        .filter(f => !f.startsWith('.') && f !== 'index.ts')
        .map(f => f.replace(/\.(astro|tsx|jsx|js|ts)$/, ''));
}

export function remarkCoherentAutoImport() {
    const themeComponents = getThemeComponents(componentsDir);

    return (tree: any, file: any) => {
        const usedComponents = new Set<string>();
        const declaredSymbols = new Set<string>();

        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any) => {
            if (node.name) {
                usedComponents.add(node.name);
            }
        });

        if (usedComponents.size === 0) return;
        // Check imports, consts, variables in the mdx for component persistence
        visit(tree, 'mdxjsEsm', (node: any) => {
            if (node.data && node.data.estree) {
                for (const statement of node.data.estree.body) {

                    // Check for import { Figure } from ... or import Figure from ...
                    if (statement.type === 'ImportDeclaration') {
                        for (const specifier of statement.specifiers) {
                            if (specifier.local && specifier.local.name) {
                                declaredSymbols.add(specifier.local.name);
                            }
                        }
                    }

                    // Check for export const MyComponent = ...
                    else if (statement.type === 'ExportNamedDeclaration' && statement.declaration) {
                        if (statement.declaration.type === 'VariableDeclaration') {
                            for (const decl of statement.declaration.declarations) {
                                if (decl.id && decl.id.type === 'Identifier') {
                                    declaredSymbols.add(decl.id.name);
                                }
                            }
                        } else if (statement.declaration.type === 'FunctionDeclaration' && statement.declaration.id) {
                            declaredSymbols.add(statement.declaration.id.name);
                        }
                    }

                    // Check for const MyComponent = ...
                    else if (statement.type === 'VariableDeclaration') {
                        for (const decl of statement.declarations) {
                            if (decl.id && decl.id.type === 'Identifier') {
                                declaredSymbols.add(decl.id.name);
                            }
                        }
                    }
                }
            } else {
                // Fallback check with regex
                const code = node.value || '';
                const importRegex = /import\s+(?:\{[^}]*\}|[^;]+)\s+from\s+['"][^'"]+['"]/g;
                let match: RegExpExecArray | null;
                while ((match = importRegex.exec(code)) !== null) {
                    usedComponents.forEach(c => {
                        if (new RegExp(`\\b${c}\\b`).test((match as RegExpExecArray)[0])) {
                            declaredSymbols.add(c);
                        }
                    });
                }
            }
        });
        const missingThemeComponents: string[] = [];
        usedComponents.forEach(c => {
            if (themeComponents.includes(c) && !declaredSymbols.has(c)) {
                missingThemeComponents.push(c);
            }
        });

        if (missingThemeComponents.length > 0) {
            const importStatement = `import { ${missingThemeComponents.join(', ')} } from 'coherent-docs-theme/components';`;

            if (isDev) {
                const relativePath = path.relative(process.cwd(), file.path);
                console.log(
                    `\x1b[36m[auto-import]\x1b[0m Injected in \x1b[33m${relativePath}\x1b[0m\n` +
                    ` ↳ \x1b[32m${importStatement}\x1b[0m \x1b[90m(Tip: paste manually for autocomplete)\x1b[0m`
                );
            }

            tree.children.unshift({
                type: 'mdxjsEsm',
                value: importStatement,
                data: {
                    estree: {
                        type: 'Program',
                        sourceType: 'module',
                        body: [
                            {
                                type: 'ImportDeclaration',
                                specifiers: missingThemeComponents.map(name => ({
                                    type: 'ImportSpecifier',
                                    imported: { type: 'Identifier', name },
                                    local: { type: 'Identifier', name }
                                })),
                                source: { type: 'Literal', value: 'coherent-docs-theme/components', raw: "'coherent-docs-theme/components'" }
                            }
                        ]
                    }
                }
            });
        }
    };
}