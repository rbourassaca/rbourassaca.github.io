<script lang="ts">
	import type { projectType } from '$lib/types/project';
	import Panel from '$lib/components/panel/panel.svelte';
	import PostHeader from '$lib/components/postHeader.svelte';
	import Filter from '$lib/components/filter.svelte';
	export let data: { projects: projectType[] };
</script>

<section>
	<Filter />
	{#if data.projects.length > 0}
		{#each data.projects as project}
			<Panel post={true} slug={project.slug}>
				<PostHeader metadata={project.metadata} />
				<svelte:component this={project.component} />
			</Panel>
		{/each}
	{:else}
		<p>Aucun projet à afficher.</p>
	{/if}
</section>

<style lang="scss">
	@use '../lib/styles/var';
	section {
		display: grid;
		row-gap: var.$spacingBetweenElements;
	}
</style>
