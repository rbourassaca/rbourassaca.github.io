<script lang="ts">
	import PostControl from './post/postControl.svelte';
	interface Props {
		post?: boolean;
		isPostPage?: boolean;
		slug?: string;
		children?: import('svelte').Snippet;
	}

	let {
		post = false,
		isPostPage = false,
		slug = '',
		children
	}: Props = $props();
</script>

{#if post}
	<article id={slug}>
		{@render children?.()}
		<PostControl {slug} {isPostPage} />
	</article>
{:else}
	<article>
			{@render children?.()}
	</article>
{/if}

<style lang="scss">
	@use '../styles/var.scss';

	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: var.$spacingBetweenElements;
		height: fit-content;
		border-radius: var.$borderRadius;
		outline: 1px solid var(--color-border);
		box-shadow: 0 0 5px var(--color-border);
	}
</style>
