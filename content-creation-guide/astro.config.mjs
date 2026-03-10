// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import coherentTheme from 'coherent-docs-theme';
import { content } from './src/data/content';

export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
			...coherentTheme({
				documentationSearchTag: 'Gameface content guide',
				showPageProgress: true,
			})],
			customCss: ['./src/styles/custom.css'],
			sidebar: content.map((topic) => {
				return {
					label: topic.heading,
					autogenerate: { directory: topic.link.split('/')[1] },
					collapsed: true,
				}
			})
		}),
	],
});
