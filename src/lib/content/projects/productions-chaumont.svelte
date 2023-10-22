<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Gallery from '$lib/components/gallery.svelte';
	import src01 from '$lib/content/images/productions-chaumont_01.png';
	import src02 from '$lib/content/images/productions-chaumont_02.png';

	export const metadata: projectMetadataType = {
		title: 'Productions Chaumont',
		categories: [categories.web],
		tags: [tags.html, tags.css, tags.js, tags.php, tags.wp],
		dateCreated: new Date('2022-04-10'),
		dateUpdated: new Date('2023-09-17')
	};
</script>

<p>
	Création du nouveau site web, d'un thème et d'un plugin sur mesure pour <a
		href="https://productionschaumont.com"
		target="_blank"
		rel="noreferrer">Productions Chaumont</a
	>.
</p>
<p>
	PS: puisque le contenu du site web est géré par <a
		href="https://productionschaumont.com"
		target="_blank"
		rel="noreferrer">Productions Chaumont</a
	>, il est possible que des modifications aient été fait qui n'ont pas été réalisé par moi.
</p>

<Gallery
	images={[
		{
			src: src01,
			alt: "Page d'accueil du site internet de Productions Chaumont."
		},
		{
			src: src02,
			alt: "Page d'information du site internet de Productions Chaumont."
		}
	]}
/>
