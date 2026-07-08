import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import type { Root, Content, Heading as MdastHeading, Text } from 'mdast';
import type { MdxTextExpression } from 'mdast-util-mdx-expression';

type BadgeVariant = "note" | "danger" | "success" | "caution" | "tip" | "default";

type HeadingSidebarItem = { 
    label: string; 
    link: string; 
    badge?: { 
        text: string; 
        variant?: BadgeVariant 
    } 
};

function parseHeadingWithBadge(node: MdastHeading) {
    const text = node.children
        .filter((child): child is Text => child.type === 'text')
        .map((child) => child.value)
        .join('');

    const badgeNode = node.children.find(
        (child): child is Text => 
            child.type === 'text' && child.value.includes(':badge[')
    );

    let badgeText = '';
    if (badgeNode) {
        const match = badgeNode.value.match(/:badge\[(.*?)\]/);
        if (match && match[1]) {
            badgeText = match[1];
        }
    }

    const badgeVariantNode = node.children.find(
        (child): child is MdxTextExpression => 
            child.type === 'mdxTextExpression' && child.value.includes('variant="')
    );

    let badgeVariant: BadgeVariant | undefined;
    if (badgeVariantNode) {
        const match = badgeVariantNode.value.match(/variant="(.*?)"/);
        if (match && match[1]) {
            badgeVariant = match[1] as BadgeVariant;
        }
    }

    let badge = null;
    if (badgeText) {
        badge = { text: badgeText, variant: badgeVariant };
    }

    return { text, badge };
}

function slugify(text: string): string {
    return text
        .replace(/:badge\[.*?\]/g, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '');
}

function walk(node: Content | Root, docsDir: string, headings: HeadingSidebarItem[]): void {
    if (node.type === 'heading' && node.depth === 2) {
        const { text, badge } = parseHeadingWithBadge(node);
        const heading: HeadingSidebarItem = {
            label: text.replace(/:badge\[.*?\]/g, '').trim(),
            link: `${docsDir}/changelog/#${slugify(text)}`,
        };

        if (badge) {
            heading.badge = {
                text: badge.text,
                ...(badge.variant && { variant: badge.variant })
            };
        }

        headings.push(heading);
    }

    if ('children' in node && node.children) {
        for (const child of node.children) {
            walk(child, docsDir, headings);
        }
    }
}

function generateChangelog(docsDirName: string, changelogPath: string) {
    const headings: HeadingSidebarItem[] = [];
    const filePath = path.resolve(changelogPath);
    
    if (!fs.existsSync(filePath)) {
        return { label: 'Changelog', items: [] };
    }

    const file = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(file);

    const tree = unified()
        .use(remarkParse)
        .use(remarkMdx)
        .parse(content) as Root;

    walk(tree, docsDirName, headings);

    return {
        label: 'Changelog',
        items: [...headings]
    };
}

export default generateChangelog;