import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

function processUrl(base: string, url: string) {
    if (!url || !url.startsWith('/') || url.startsWith('//')) return url;

    let newUrl = url;

    if (!newUrl.startsWith(base + '/')) {
        newUrl = `${base}${newUrl}`;
    }

    const [pathPart, hashPart] = newUrl.split('#');
    //@ts-ignore
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathPart);

    //@ts-ignore
    if (!hasExtension && !pathPart.endsWith('/')) {
        newUrl = `${pathPart}/` + (hashPart !== undefined ? `#${hashPart}` : '');
    }

    return newUrl;
};

export function remarkFixAbsoluteLinks(options: { basePath: string }) {
    return (tree: Root) => {
        if (!options || !options.basePath || options.basePath === '/') return;
        const base = options.basePath.replace(/\/$/, '');

        visit(tree, ['link', 'image'], (node: any) => {
            node.url = processUrl(base, node.url);
        });

        visit(tree, 'html', (node: any) => {
            if (node.value) {
                node.value = node.value.replace(/(src|href)="(\/[^"]+)"/g, (_: string, attr: string, p1: string) => {
                    return `${attr}="${processUrl(base, p1)}"`;
                });
            }
        });

        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any) => {
            if (node.name === 'NativeLink') return;
            if (node.name === 'UnityLink') return;
            if (node.name === 'UnrealLink') return;

            if (node.attributes) {
                for (const attr of node.attributes) {
                    if ((attr.name === 'src' || attr.name === 'href') && typeof attr.value === 'string') {
                        attr.value = processUrl(base, attr.value);
                    }
                }
            }
        });
    };
}