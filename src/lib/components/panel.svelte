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
		padding: var.$spacingBetweenElements;
		height: fit-content;
		border-radius: var.$borderRadius;
		outline: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		:global {
			h1:first-child,
			h2:first-child,
			h3:first-child,
			h4:first-child,
			h5:first-child,
			h6:first-child,
			div:first-child h1,
			div:first-child h2,
			div:first-child h3,
			div:first-child h4,
			div:first-child h5,
			div:first-child h6 {
				margin-top: 0;
			}
		}
	}
</style>
