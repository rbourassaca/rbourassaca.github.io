<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Audio from '$lib/components/audio.svelte';
	import src from '$lib/content/audio/neck_deep_-_citizens_of_earth.mp3';

	export const metadata: projectMetadataType = {
		title: 'Neck Deep - Citizens Of Earth (instrumentale)',
		categories: [categories.audio],
		tags: [tags.reaper],
		dateCreated: new Date('2022-12-10'),
		dateUpdated: undefined
	};
</script>

<p>
	Enregistrement, édition et mixage d'une version instrumentale de la chanson Citizens of Earth de
	Neck Deep.
</p>
<Audio {src} />
