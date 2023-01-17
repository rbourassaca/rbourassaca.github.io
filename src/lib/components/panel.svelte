<script lang="ts">
	export let post: boolean = false;
	export let slug: string = '';
	import Button from './button.svelte';

	let shared = false;

	let copyUrl = () => {
		if (!shared) {
			navigator.clipboard.writeText(window.location.origin + '/projet/' + slug);
			shared = true;
			window.setTimeout(() => {
				shared = false;
			}, 2000);
		}
	};
</script>

<article>
	<slot />
	{#if post}
		<div>
			<div>
				<a href="/projet/{slug}">
					<Button>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
							<path
								d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"
							/>
						</svg>
						Voir
					</Button>
				</a>
			</div>
			<div>
				<Button
					action={() => {
						copyUrl();
					}}
				>
					{#if shared}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							/>
						</svg>
						Le lien à été copier!
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"
							/>
						</svg>
						Copier le lien
					{/if}
				</Button>
			</div>
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
		> div:last-child {
			display: flex;
			flex-direction: column;
			@media screen and (min-width: var.$sm) {
				flex-direction: row;
			}
		}
		div > div {
			display: flex;
			justify-content: center;
			width: 100%;
		}
	}
</style>
