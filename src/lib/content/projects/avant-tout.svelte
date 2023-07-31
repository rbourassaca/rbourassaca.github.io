<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Gallery from '$lib/components/gallery.svelte';
	import src01 from '$lib/content/images/avant-tout-entete.png';
	import src02 from '$lib/content/images/avant-tout-contenu.png';
	import src03 from '$lib/content/images/avant-tout-contenu-2.png';
	import src04 from '$lib/content/images/avant-tout-temoignage.png';
	import src05 from '$lib/content/images/avant-tout-pied-de-page.png';
	import src01Thumb from '$lib/content/images/avant-tout-entete.png?w=300;400;500;1000';
	import src02Thumb from '$lib/content/images/avant-tout-contenu.png?w=300;400;500;1000';
	import src03Thumb from '$lib/content/images/avant-tout-contenu-2.png?w=300;400;500;1000';
	import src04Thumb from '$lib/content/images/avant-tout-temoignage.png?w=300;400;500;1000';
	import src05Thumb from '$lib/content/images/avant-tout-pied-de-page.png?w=300;400;500;1000';

	export const metadata: projectMetadataType = {
		title: 'Avant Tout',
		categories: [categories.web],
		tags: [tags.html, tags.css, tags.js, tags.php, tags.wp],
		dateCreated: new Date('2021-03-01'),
		dateUpdated: undefined
	};
</script>

<p>
	Réalisation d'un site web pour <a href="https://www.otstcfq.org" target="_blank" rel="noreferrer"
		>l'Ordre des travailleurs sociaux et des thérapeutes conjugaux et familiaux du Québec</a
	>
	dans le cadre de la campagne d'information
	<a href="https://www.otstcfq.org/avanttout/" target="_blank" rel="noreferrer">AVANT TOUT</a>.
</p>

<p>
	PS: puisque le contenu du site web est géré par l'<a
		href="https://www.otstcfq.org"
		target="_blank"
		rel="noreferrer">OTSTCFQ</a
	>, il est possible que des modifications aient été fait qui n'ont pas été réalisé par moi.
</p>

<Gallery
	images={[
		{
			src: src01,
			srcThumb: src01Thumb,
			alt: 'Entête du site Avant Tout.'
		},
		{
			src: src02,
			srcThumb: src02Thumb,
			alt: 'Contenu du site Avant Tout.'
		},
		{
			src: src03,
			srcThumb: src03Thumb,
			alt: 'Contenu du site Avant Tout.'
		},
		{
			src: src04,
			srcThumb: src04Thumb,
			alt: 'Section témoignage du site Avant Tout.'
		},
		{
			src: src05,
			srcThumb: src05Thumb,
			alt: 'Pied de page du site Avant Tout.'
		}
	]}
/>
