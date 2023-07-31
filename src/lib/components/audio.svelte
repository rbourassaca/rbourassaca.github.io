<script lang="ts">
	import WaveSurfer from 'wavesurfer.js';
	import Button from '$lib/components/button.svelte';
	import LoadingIcon from '$lib/components/loadingIcon.svelte';
	import { onMount } from 'svelte';
	export let src: string;

	let wavesurfer: WaveSurfer;
	let wavesurferTarget: HTMLElement;
	let wavesurferIsPlaying: boolean;
	let wavesurferIsReady: boolean = false;
	let wavesurferIsLoading: boolean = false;
	let wavesurferColor: string;

	onMount(() => {
		wavesurferColor = getComputedStyle(document.documentElement).getPropertyValue(
			'--color-text-light'
		);
	});

	const wavesurferInit = () => {
		if (wavesurfer === undefined) {
			wavesurferIsLoading = true;
			wavesurfer = WaveSurfer.create({
				container: wavesurferTarget,
				url: src,
				height: 40,
				barWidth: 2,
				barGap: 2,
				barHeight: 0.9,
				waveColor: wavesurferColor,
				progressColor: wavesurferColor
			});
			wavesurfer.once('ready', () => {
				wavesurferIsReady = true;
				wavesurferIsLoading = false;
				play();
			});
			wavesurfer.on('interaction', () => {
				play();
			});
			wavesurfer.on('load', () => {
				wavesurferIsLoading = true;
			});
			wavesurfer.on('ready', () => {
				wavesurferIsLoading = false;
			});
		}
	};

	const play = () => {
		if (!wavesurfer.isPlaying()) {
			wavesurfer.play();
			wavesurferIsPlaying = true;
		}
	};

	const pause = () => {
		if (wavesurfer.isPlaying()) {
			wavesurfer.pause();
			wavesurferIsPlaying = false;
		}
	};
</script>

<div on:click={wavesurferInit} on:keyup={wavesurferInit} role="button" tabindex="0">
	{#if wavesurferIsLoading}
		<Button disabled={true}>
			<LoadingIcon />
		</Button>
	{:else if wavesurferIsPlaying}
		<Button
			action={() => {
				pause();
			}}
			label="Faire pause à l'audio"
		>
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
				<path
					d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
				/>
			</svg>
		</Button>
	{:else}
		<Button
			action={() => {
				play();
			}}
			label="Jouer l'audio"
		>
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
				<path
					d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
				/>
			</svg>
		</Button>
	{/if}
	<span bind:this={wavesurferTarget}></span>
</div>

<style lang="scss">
	@use '../styles/var.scss';

	div {
		border-radius: var.$borderRadius;
		background-color: var(--color-background-alt);
		padding: var.$spacingBetweenElementsSmall var.$spacingBetweenElementsSmall * 2;
		margin: var.$spacingBetweenElementsSmall 0;
		display: flex;
		align-items: center;
		gap: var.$spacingBetweenElementsSmall;
		span {
			margin: 0 var.$spacingBetweenElementsSmall;
			height: 40px;
			width: 100%;
			display: flex;
			align-items: center;
			cursor: pointer;
			:global {
				div {
					width: 100%;
				}
				::part(cursor) {
					background-color: var(--color-text);
					width: 0.1rem;
				}
			}
		}
		span:empty::before {
			content: '';
			display: block;
			height: 0;
			width: 100%;
			outline: 1px dashed var(--color-text-light);
		}
	}
</style>
