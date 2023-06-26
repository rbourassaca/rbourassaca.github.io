<script lang="ts">
	import type { image } from '$lib/types/image';
	import { onMount } from 'svelte';
	import Image from '$lib/components/image.svelte';
	import lightGallery from 'lightgallery';
	import 'lightgallery/css/lightgallery-bundle.min.css';
	export let images: { src: image | string; srcThumb: image | string; alt: string }[];
	let gallery: HTMLElement;
	onMount(() => {
		lightGallery(gallery);
	});
</script>

<div bind:this={gallery}>
	{#each images as image}
		{#if typeof image.src !== 'string'}
			<a href={image.src.img.src}>
				<Image src={image.srcThumb} alt={image.alt} />
			</a>
		{/if}
	{/each}
</div>

<style lang="scss">
	@use '../styles/var.scss';
	div {
		margin: var.$spacingBetweenElementsSmall 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		justify-items: center;
		align-items: center;
		gap: 1rem;
		a {
			position: relative;
			max-width: 500px;
			:global {
				img {
					display: block;
					width: 100%;
					height: auto;
					max-width: 500px;
				}
			}
		}
		a::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			transition: var.$transition;
		}
	}
	a:hover::after {
		box-shadow: 0 0 25px black inset;
	}
	:global {
		div.lg-container {
			img {
				padding: 4rem;
			}
			div.lg-backdrop {
				background-color: rgba(0, 0, 0, 0.9);
				backdrop-filter: blur(5px);
			}
		}
	}
</style>
