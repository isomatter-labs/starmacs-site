import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	server: {
			host: '0.0.0.0',
			port: 3000,
	},
	integrations: [
		starlight({
			title: 'Starmacs',
			social: {
				github: 'https://github.com/isomatter-labs/starmacs',
                discord: 'https://discord.gg/EdzaNrcQsv'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/guides/install/' },
                        { label: 'Customization', link: '/guides/custom/'},
                        { label: 'Contributing', link: '/guides/contributing/'}
					],
				},
			],
		}),
	],
});
