<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Audio from '$lib/components/audio.svelte';
	import src from '$lib/content/audio/green_day_-_brain_stew.mp3';

	export const metadata: projectMetadataType = {
		title: 'Green Day - Brain Stew (instrumentale)',
		categories: [categories.audio],
		tags: [tags.reaper],
		dateCreated: new Date('2022-12-10'),
		dateUpdated: undefined
	};
</script>

<p>
	Enregistrement, édition et mixage d'une version instrumentale de la chanson Brain Stew de Green
	Day.
</p>
<Audio {src} />
