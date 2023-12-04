<script lang="ts" context="module">
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Audio from '$lib/components/audio.svelte';
	import src from '$lib/content/audio/architects_-_animals.mp3';

	export const metadata: projectMetadataType = {
		title: 'Architects - Animals (instrumentale)',
		categories: [categories.audio],
		tags: [tags.reaper],
		dateCreated: new Date('2023-07-30'),
		dateUpdated: undefined
	};
</script>

<p>
	Enregistrement, édition et mixage d'une version instrumentale de la chanson Animals de Architects.
</p>
<Audio {src} />
