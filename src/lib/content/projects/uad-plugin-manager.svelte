<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Gallery from "$lib/components/gallery.svelte"
	import src01 from "$lib/content/images/uad-plugin-manager.png"

	export const metadata: projectMetadataType = {
		title: 'UAD Plugin Manager',
		categories: [categories.programming],
		tags: [tags.go],
		dateCreated: new Date('2024-03-04'),
		dateUpdated: undefined
	};
</script>

<p>
	Utilitaire simple permettant la gestion des plugins audio d'<a href="https://www.uaudio.com/" target="_blank">Universal Audio</a> disponible sur
	<a href="https://github.com/rbourassaca/uad_plugin_manager">GitHub</a>.
</p>
<Gallery
	images={[
		{src: src01, alt: "Application UAD Plugin Manager dans Windows Terminal."}
	]}
/>