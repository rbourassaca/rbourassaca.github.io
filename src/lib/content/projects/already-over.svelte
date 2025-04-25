<script lang="ts" module>
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Audio from '$lib/components/audio.svelte';

	import src from "$lib/content/audio/mike_shinoda_-_already_over.mp3"

	export const metadata: projectMetadataType = {
		title: 'Mike Shinoda - Already Over',
		categories: [categories.audio],
		tags: [tags.reaper],
		dateCreated: new Date('2024-03-01'),
		dateUpdated: undefined
	};
</script>

<p>Enregistrement, édition et mixage de la chanson Already Over de Mike Shinoda disponible sur la grande majorité des plateformes d'achat et de diffusion dont <a href="https://open.spotify.com/track/3lrdNAnh8F0ejegCCEBcM8?si=cdab6285c3f74353" target="_blank">Spotify</a> et <a href="https://music.apple.com/us/song/already-over/1733135629" target="_blank">Apple Music</a>.</p>
<Audio {src} />