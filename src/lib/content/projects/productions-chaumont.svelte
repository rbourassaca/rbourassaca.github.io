<script lang="ts" context="module">
	import type { metadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Gallery from '$lib/components/gallery.svelte';
	import src01 from '$lib/content/images/productions-chaumont_01.png';
	import src02 from '$lib/content/images/productions-chaumont_02.png';

	export const metadata: metadataType = {
		title: 'Productions Chaumont',
		categories: [categories[0]],
		tags: [tags[0], tags[1], tags[2], tags[4], tags[5]],
		dateCreated: new Date('2022-04-10'),
		dateUpdated: new Date('2022-04-10')
	};
</script>

<p>
	Création d'un thème et d'un plugin sur mesure pour le site internet de <a
		href="https://productionschaumont.com"
		target="_blank"
		rel="noreferrer">Productions Chaumont</a
	>.
</p>

<Gallery
	images={[
		{ src: src01, alt: "Page d'accueil du site internet de Productions Chaumont." },
		{ src: src02, alt: "Page d'information du site internet de Productions Chaumont." }
	]}
/>
