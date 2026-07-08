import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export function remarkFixDoxybookLinks() {
    return (tree: Root, file: any) => {
        if (!file?.history?.[0].includes('API_reference')) return;

        visit(tree, 'link', (node: any) => {
            if (node.url && node.url.includes('#')) {
                let [base, hash] = node.url.split('#');

                const linkText = node.children
                    .map((c: any) => c.value || '')
                    .join('');

                if (linkText) {
                    const wordsWithUnderscores = linkText.match(/[a-zA-Z0-9_]*_[a-zA-Z0-9_]*/g) || [];
                    const uniqueWords = [...new Set(wordsWithUnderscores)];

                    //@ts-ignore
                    uniqueWords.forEach((word: string) => {
                        const correctStr = word.toLowerCase();
                        const brokenStr = correctStr.replace(/_/g, '-');
                        hash = hash.split(brokenStr).join(correctStr);
                    });
                }

                hash = hash.replace(/~/g, '')
                    .replace(/\(\)/g, '')
                    .replace(/=/g, '')
                    .replace(/</g, '')
                    .replace(/>/g, '')
                    .replace(/@/g, '')
                    .replace(/-+/g, '-')
                node.url = base ? `${base}#${hash}` : `#${hash}`;
            }
        });
    };
}