<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	import type { projectType } from '$lib/types/project';
	import PostHeader from '$lib/components/post/postHeader.svelte';
	export let data: { project: projectType };
	import Panel from '$lib/components/panel.svelte';
	import Button from '$lib/components/button.svelte';

	let previousPage: string = base;
	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});
</script>

<section>
	<a href={previousPage === '/' ? 'javascript:history.back()' : '/'}>
		<Button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path
					d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
				/>
			</svg>
			Revenir au profile
		</Button>
	</a>
	<Panel post={true} slug={data.project.slug} isPostPage={true}>
		<PostHeader metadata={data.project.metadata} />
		<svelte:component this={data.project.component} />
	</Panel>
</section>

<style lang="scss">
	@use '../../../lib/styles/var.scss';

	a {
		display: flex;
		width: fit-content;
		margin-bottom: var.$spacingBetweenElementsSmall;
	}

	section {
		width: 100%;
		order: -1;
	}

	@media (min-width: var.$lg) {
		section {
			order: 0;
		}
	}
</style>
