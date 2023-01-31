<script lang="ts" context="module">
	import type { metadataType } from '$lib/types/project';
	import { categories, tags } from './_projectMetadata';
	export const metadata: metadataType = {
		title: 'Lorem ipsum dolor',
		categories: [categories[0]],
		tags: [tags[0], tags[1], tags[2]],
		dateCreated: new Date('2022-01-19'),
		dateUpdated: new Date('2022-01-19')
	};
	import Gallery from '$lib/components/gallery.svelte';
</script>

<p>
	Amet porttitor eget dolor morbi non arcu risus quis varius. Id porta nibh venenatis cras sed felis
	eget velit aliquet. Sit amet porttitor eget dolor morbi non arcu. Sit amet aliquam id diam
	maecenas ultricies mi eget mauris. Adipiscing diam donec adipiscing tristique risus nec feugiat
	in.
</p>
<Gallery
	images={[
		'https://via.placeholder.com/550',
		'https://via.placeholder.com/650',
		'https://via.placeholder.com/350',
		'https://via.placeholder.com/550'
	]}
/>
<p>
	Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Lobortis feugiat vivamus at augue
	eget arcu dictum varius. Cras adipiscing enim eu turpis. Mattis aliquam faucibus purus in massa
	tempor nec feugiat. Eget dolor morbi non arcu risus. Tellus molestie nunc non blandit massa.
	Imperdiet proin fermentum leo vel orci. Dui id ornare arcu odio ut sem. Feugiat vivamus at augue
	eget arcu dictum varius duis. Eu consequat ac felis donec et.
</p>
<p>
	Enim ut sem viverra aliquet eget sit amet. Commodo odio aenean sed adipiscing diam donec.
	Scelerisque in dictum non consectetur a erat nam. Purus in mollis nunc sed. Sit amet nulla
	facilisi morbi tempus iaculis. Aenean pharetra magna ac placerat. Risus pretium quam vulputate
	dignissim suspendisse in est.
</p>
