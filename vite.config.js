import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetools({
			defaultDirectives: new URLSearchParams({
				format: 'avif;webp',
				as: 'picture'
			})
		}),

		sveltekit()
	],
	esbuild: {
		drop: ['console', 'debugger']
	}
};

export default config;
