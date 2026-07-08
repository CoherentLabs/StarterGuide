import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export function remarkReleaseDirective() {
    return (tree: Root) => {
        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any, index, parent) => {
            const nodeName = node.name;
            if (nodeName !== 'Release' || index === undefined || !parent) return;

            const attrs = Object.fromEntries(node.attributes?.map((a: any) => [a.name, a.value]) || []);
            const { version } = attrs;

            if (!version) return;

            const headingNode = {
                type: 'heading',
                depth: 2,
                children: [{ type: 'text', value: `Version ${version}` }],
                data: {
                    hProperties: { id: version }
                }
            };

            parent.children.splice(index, 0, headingNode);

            return index + 2;
        });
    };
}