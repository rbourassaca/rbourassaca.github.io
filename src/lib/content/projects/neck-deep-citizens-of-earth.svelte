<script lang="ts" context="module">
	import type { metadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Audio from '$lib/components/audio.svelte';
	import src from '$lib/content/audio/neck_deep_-_citizens_of_earth.mp3';

	export const metadata: metadataType = {
		title: 'Neck Deep - Citizens Of Earth (instrumentale)',
		categories: [categories[1]],
		tags: [tags[3]],
		dateCreated: new Date('2022-12-10'),
		dateUpdated: new Date('2022-12-10')
	};
</script>

<p>Version instrumentale de la chanson Citizens of Earth de Neck Deep.</p>
<Audio {src} />
