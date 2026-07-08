import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

const ifDirectiveNames = ['If', 'IfNot', 'IfEnv']
export function remarkIfDirective() {
    return (tree: Root) => {
        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any, index, parent) => {
            const nodeName = node.name;
            if (!ifDirectiveNames.includes(nodeName) || index === undefined || !parent) return;

            const attrs: Record<string, string | undefined> = {};
            node.attributes?.forEach((attr: any) => {
                if (attr.type === 'mdxJsxAttribute' && typeof attr.value === 'string') {
                    attrs[attr.name] = attr.value;
                }
            });

            const { product, type, env } = attrs;

            const currentProduct = process.env.DOCS_PRODUCT;
            const currentType = process.env.DOCS_TYPE;
            const currentEnv = process.env.MODE;

            let shouldRender = true;

            switch (nodeName) {
                case 'If':
                    if (product && product !== currentProduct) shouldRender = false;
                    if (type && type !== currentType) shouldRender = false;
                    break;

                case 'IfNot':
                    if (product && product === currentProduct) shouldRender = false;
                    if (type && type === currentType) shouldRender = false;
                    break;

                case 'IfEnv':
                    if (env && env !== currentEnv) shouldRender = false;
                    break;
            }

            if (shouldRender) {
                parent.children.splice(index, 1, ...node.children);
                return index;
            } else {
                parent.children.splice(index, 1);
                return index;
            }
        });
    };
}