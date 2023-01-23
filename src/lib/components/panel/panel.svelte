<script lang="ts">
	export let post: boolean = false;
	export let slug: string = '';
	import PostControl from './postControl.svelte';
</script>

<article>
	<slot />
	{#if post}
		<PostControl {slug} />
	{/if}
</article>

<style lang="scss">
	@use '../../styles/var.scss';

	article {
		padding: var.$spacingBetweenElementsSmall var.$spacingBetweenElements;
		height: fit-content;
		border-radius: var.$borderRadius;
		box-shadow: 5px 5px 10px var(--color-panel-shadow1), -5px -5px 10px var(--color-panel-shadow2);
		display: flex;
		flex-direction: column;
	}
</style>
