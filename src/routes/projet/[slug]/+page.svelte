<script lang="ts">
	import type { projectType } from '$lib/types/project';
	import PostHeader from '$lib/components/postHeader.svelte';
	export let data: { project: projectType };
	import Panel from '$lib/components/panel/panel.svelte';
	import Button from '$lib/components/button.svelte';
</script>

<a href={`/#${data.project.slug}`}>
	<Button>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
			<path
				d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
			/>
		</svg>
		Revenir au profile
	</Button>
</a>
<Panel post={true} slug={data.project.slug}>
	<PostHeader metadata={data.project.metadata} />
	<svelte:component this={data.project.component} />
</Panel>

<style lang="scss">
	@use '../../../lib/styles/var.scss';

	a {
		display: flex;
		width: fit-content;
		margin-bottom: var.$spacingBetweenElementsSmall;
	}
</style>
