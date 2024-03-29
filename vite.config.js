import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		imagetools({
			defaultDirectives: new URLSearchParams({
				format: 'avif;webp;jpg',
				as: 'picture',
				withoutEnlargement: '',
				w: '200;400;800;1200;1800;2400'
			})
		}),

		sveltekit()
	],
	esbuild: {
		drop: process.env.NODE_ENV !== 'development' ? ['console', 'debugger'] : ['debugger']
	}
};

export default config;
