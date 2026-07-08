import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

const currentProduct = process.env.DOCS_PRODUCT || 'Gameface';
let productName = currentProduct;
if (currentProduct) productName = currentProduct.charAt(0).toUpperCase() + currentProduct.slice(1);

const productNameRegex = /<ProductName\s*\/?>|<ProductName>\s*<\/ProductName>/g;

export function remarkProductNameDirective() {
    return (tree: Root) => {

        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any, index, parent) => {
            if (node.name === 'ProductName' && parent && index !== undefined) {
                parent.children.splice(index, 1, {
                    type: 'text',
                    value: productName
                });
                return index;
            }
        });

        visit(tree, ['text', 'inlineCode', 'code', 'html'], (node: any) => {
            if (typeof node.value === 'string') {
                node.value = node.value.replace(productNameRegex, productName);
            }
        });
    };
}