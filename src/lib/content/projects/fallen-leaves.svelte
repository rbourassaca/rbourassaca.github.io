<script lang="ts" module>
	import type { projectMetadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';

	import Audio from '$lib/components/audio.svelte';
	import Gallery from '$lib/components/gallery.svelte';

	import srcAudio from '$lib/content/audio/fallen_leaves.opus';
	import srcImage from '$lib/content/images/fallen_leaves.jpg?enhanced&w=200;400;800;1200';

	export const metadata: projectMetadataType = {
		title: 'Billy Talent - Fallen Leaves',
		categories: [categories.audio],
		tags: [tags.reaper],
		dateCreated: new Date('2026-04-09'),
		dateUpdated: undefined
	};
</script>

<p>
	Enregistrement, édition et mixage de la chanson Fallen Leaves de Billy Talent disponible sur la
	grande majorité des plateformes d'achat et de diffusion dont <a
		href="https://open.spotify.com/track/0lh24Or4xtlvCvxUmRUqG8?si=84cfe4ec4c1b43f6"
		target="_blank">Spotify</a
	>
	et
	<a href="https://music.apple.com/ca/song/fallen-leaves/1887177029" target="_blank">Apple Music</a
	>.
</p>
<Gallery images={[{ src: srcImage, alt: 'Cover Art' }]} />
<Audio src={srcAudio} />
