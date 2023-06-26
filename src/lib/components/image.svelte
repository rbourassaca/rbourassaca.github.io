<script lang="ts">
	import type { image } from '$lib/types/image';

	export let src: image | string;

	export let alt: string | undefined = undefined;
	export let loading: 'lazy' | 'eager' = 'lazy';
	export let decoding: 'async' | 'auto' | 'sync' = 'async';
	export let role: string | undefined = undefined;
</script>

{#if typeof src === 'string'}
	<img {src} {alt} />
{:else}
	<picture>
		{#each Object.entries(src.sources) as [format, images]}
			<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
		{/each}

		<img src={src.img.src} {alt} width={src.img.w} height={src.img.h} {loading} {decoding} {role} />
	</picture>
{/if}
