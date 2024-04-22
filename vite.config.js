import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	esbuild: {
		drop: process.env.NODE_ENV !== 'development' ? ['console', 'debugger'] : ['debugger']
	}
};

export default config;
