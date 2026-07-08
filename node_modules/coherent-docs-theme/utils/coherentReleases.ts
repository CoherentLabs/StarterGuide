import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export function getSortedCoherentReleases(directory: string = 'src/content/docs/releases') {
    if (!fs.existsSync(directory)) return [];

    const isDev = process.env.NODE_ENV === 'development' || process.env.MODE === 'development';
    const isDraftBuild = process.env.BUILD_DRAFTS === 'true';
    const allowDrafts = isDev || isDraftBuild;

    const entries = fs.readdirSync(directory, { withFileTypes: true });
    const folders = entries.filter(entry => entry.isDirectory());

    const releaseItems = folders
        .map(folder => {
            const folderName = folder.name;

            if (folderName.toLowerCase() === 'next_release' && !allowDrafts) {
                return null;
            }

            const indexPath = path.join(directory, folderName, 'index.mdx');
            const indexMdPath = path.join(directory, folderName, 'index.md');
            const finalPath = fs.existsSync(indexPath) ? indexPath : (fs.existsSync(indexMdPath) ? indexMdPath : null);

            if (!finalPath) return null;

            const fileContent = fs.readFileSync(finalPath, 'utf-8');
            const { data } = matter(fileContent);

            if (data.draft === true && !allowDrafts) {
                return null;
            }

            return {
                label: data.sidebar?.label || data.title || folderName,
                link: `/releases/${folderName.replaceAll('.', '').toLowerCase()}/`,
                badge: data.sidebar?.badge,
            };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null);

    const nextRelease = releaseItems.find(i => i.label.toLowerCase() === 'next_release');
    const versionedReleases = releaseItems
        .filter(i => i.label.toLowerCase() !== 'next_release')
        .sort((a, b) => b.label.localeCompare(a.label, undefined, { numeric: true }));

    if (versionedReleases[0] && !versionedReleases[0].badge) {
        versionedReleases[0].badge = {
            text: 'Latest',
            variant: 'tip'
        };
    }
    const finalItems = nextRelease ? [nextRelease, ...versionedReleases] : versionedReleases;

    return [
        {
            label: 'Releases',
            items: finalItems,
            collapsed: true
        }
    ];
}