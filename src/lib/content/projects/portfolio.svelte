<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	export const metadata: projectMetadataType = {
		title: 'Portfolio',
		categories: [categories.web],
		tags: [tags.html, tags.css, tags.js, tags.ts, tags.svelte],
		dateCreated: new Date('2018-10-01'),
		dateUpdated: new Date('2023-08-06')
	};
</script>

<p>
	Création de la nouvelle version de mon portfolio réalisé avec <a
		href="https://kit.svelte.dev/"
		target="_blank"
		rel="noreferrer">SvelteKit</a
	>. Le source code du projet est disponible sur
	<a href="https://github.com/rbourassaca/rbourassaca.github.io" target="_blank" rel="noreferrer"
		>Github</a
	>.
</p>

<p>
	Mon portfolio est maintenant plus simple a garder à jour puisque je n'utilise pas de CMS (système
	de gestion de contenu). Chaque projet est un composant svelte dans le répertoire
	<code>/src/lib/content/projects</code> et tous les ressources sont dans le répertoire
	<code>/src/lib/content/</code>.
</p>

<p>
	De plus, le projet est gratuit à garder en ligne grâce à <a
		href="https://pages.cloudflare.com/"
		target="_blank"
		rel="noreferrer">Cloudflare Pages</a
	>.
</p>
