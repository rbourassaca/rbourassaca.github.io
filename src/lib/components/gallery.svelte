<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import lightGallery from 'lightgallery';
	import 'lightgallery/css/lightgallery-bundle.min.css';
	import type { LightGallery } from 'lightgallery/lightgallery';

	interface Props {
		images: {
			src: any;
			alt: string;
		}[];
	}

	let { images }: Props = $props();

	let gallery: HTMLElement = $state();
	let lightGalleryItem: LightGallery;

	onMount(() => {
		lightGalleryItem = lightGallery(gallery, {
			download: false
		});
	});
	onDestroy(() => {
		if (typeof lightGalleryItem !== 'undefined') {
			lightGalleryItem.destroy();
		}
	});
</script>

<div bind:this={gallery}>
	{#each images as image}
		<a href={image.src.img.src} aria-label={image.alt}>
			<enhanced:img src={image.src} alt={image.alt} loading="lazy" />
		</a>
	{/each}
</div>

<style lang="scss">
	@use '../styles/var.scss';
	div {
		margin: var.$spacingBetweenElementsSmall 0;
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		gap: 1rem;
		a {
			transition: var.$transition;
			position: relative;
			max-width: 500px;
			:global {
				img {
					display: block;
					width: 100%;
					height: auto;
					max-width: 500px;
					border-radius: var.$borderRadius;
					box-shadow: 0px 0px 0px #000;
				}
			}
		}
	}
	a:hover {
		transform: scale(1.01);
		:global {
			img {
				box-shadow: 0px 0px 5px #00000065;
			}
		}
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
	@media (min-width: var.$xs) {
		div {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
	}
</style>
