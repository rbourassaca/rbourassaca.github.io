<script lang="ts">
	export let post = false;
	export let isPostPage = false;
	export let slug = '';
	import PostControl from './post/postControl.svelte';
</script>

{#if post}
	<article id={slug}>
		<slot />
		<PostControl {slug} {isPostPage} />
	</article>
{:else}
	<article>
		<slot />
	</article>
{/if}

<style lang="scss">
	@use '../styles/var.scss';

	article {
		padding: var.$spacingBetweenElementsSmall var.$spacingBetweenElements;
		height: fit-content;
		border-radius: var.$borderRadius;
		outline: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
	}
</style>
