<script lang="ts">
	export let post: boolean = false;
	export let slug: string = '';
	import Button from './button.svelte';
</script>

<article>
	<slot />
	{#if post}
		<div>
			<Button>
				<a href="/projets/{slug}">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path
							d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"
						/>
					</svg>
					Voir
				</a>
			</Button>
			<Button>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
					/>
				</svg>
				Partager
			</Button>
		</div>
	{/if}
</article>

<style lang="scss">
	@use '../styles/var.scss';

	article {
		padding: var.$spacingBetweenElementsSmall var.$spacingBetweenElements;
		margin: 10px 0;
		height: fit-content;
		border-radius: var.$borderRadius;
		box-shadow: 5px 5px 10px var(--color-panel-shadow1), -5px -5px 10px var(--color-panel-shadow2);
		display: flex;
		flex-direction: column;
		div {
			display: flex;
			justify-content: space-around;
		}
	}
</style>
