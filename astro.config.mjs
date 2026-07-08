// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import coherentTheme from 'coherent-docs-theme';
import { content } from './src/data/content';
import starlightAutoSidebar from 'starlight-auto-sidebar'

export default defineConfig({
	integrations: [
		starlight({
			title: 'UI Workflow Guide',
			social: [  
				{  
					icon: 'laptop',  
					label: 'Site',  
					href: 'https://coherent-labs.com/',  
				},  
				{  
					icon: 'email',  
					label: 'Email',  
					href: 'https://coherent-labs.com/get-in-touch'  
				},  
			],
			plugins: [
				...coherentTheme({
					documentationSearchTag: 'UI Workflow Guide',
					showPageProgress: true,
				}),
				starlightAutoSidebar()
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: content.map((topic) => {
				return {
					label: topic.heading,
					autogenerate: { directory: topic.link.split('/')[1] },
					collapsed: !topic.current,
				}
			})
		}),
	],
});
