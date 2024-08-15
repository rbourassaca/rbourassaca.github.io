<script lang="ts">
	import { toastsStore } from '../../stores';
	import { fade, slide } from 'svelte/transition';
</script>

{#if $toastsStore.length > 0}
	<span transition:fade={{ duration: 150 }} />
	<section transition:fade={{ duration: 150 }}>
		{#each $toastsStore as toast}
			<div transition:slide={{ duration: 150 }}>
				<p>{toast.text}</p>
			</div>
		{/each}
	</section>
{/if}

<style lang="scss">
	@use '../styles/var.scss';
	span {
		pointer-events: none;
		z-index: 110;
		width: 100vw;
		height: 0;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column-reverse;
		gap: var.$spacingBetweenElements;
		align-items: center;
		box-shadow: 0px 0px 200px 100px #000;
	}
	section {
		z-index: 115;
		position: fixed;
		display: flex;
		flex-direction: column;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		div {
			background-color: var(--color-background);
			border-radius: var.$borderRadius;
			padding: 1rem 2rem;
			margin-bottom: 1rem;
			border: 1px var(--color-primary) solid;
			box-shadow: 0 0 5px var(--color-primary);
			p {
				text-align: center;
			}
		}
	}
</style>
