import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export function remarkInternalDirective() {
    return (tree: Root) => {
        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any, index, parent) => {
            const nodeName = node.name;
            if (nodeName !== 'Internal' || index === undefined || !parent) return;
            const isDev = process.env.MODE === 'development' || process.env.NODE_ENV === 'development';

            if (isDev) {
                parent.children.splice(index, 1, ...node.children);
                return index;
            } else {
                parent.children.splice(index, 1);
                return index;
            }
        });
    };
}