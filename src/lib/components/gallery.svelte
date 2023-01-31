<script lang="ts">
	import { onMount } from 'svelte';
	import lightGallery from 'lightgallery';
	import 'lightgallery/lightgallery.min.js';
	import 'lightgallery/css/lightgallery-bundle.css';

	export let images: string[];

	let gallery: HTMLElement;

	onMount(() => {
		lightGallery(gallery, {
			container: gallery,
			showMaximizeIcon: false,
			closable: false,
			download: false
		}).openGallery();
	});
</script>

<span bind:this={gallery}>
	{#each images as image}
		<img src={image} alt="" />
	{/each}
</span>

<style lang="scss">
	@use '../styles/var.scss';
	span {
		width: 100%;
		height: 400px;
		margin: var.$spacingBetweenElementsSmall 0;
		> img {
			display: none;
		}
		:global {
			div.lg-container {
				div,
				span {
					color: var(--color-text);
				}
				button,
				a {
					transition: none;
					color: var(--color-secondary);
					border-radius: var.$borderRadius;
				}
				button:hover,
				a:hover {
					color: var(--color-text);
					background-color: var(--color-secondary);
				}
				button {
					background-color: transparent;
				}
			}
			div.lg-backdrop {
				background-color: var(--color-background);
			}
		}
	}
</style>
