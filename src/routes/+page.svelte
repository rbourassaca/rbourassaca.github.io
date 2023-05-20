<script lang="ts">
	import type { projectType } from '$lib/types/project';
	import Panel from '$lib/components/panel/panel.svelte';
	import PostHeader from '$lib/components/postHeader.svelte';
	import Filter from '$lib/components/filter.svelte';
	import { projects } from "../stores"

	let projectList: projectType[];
	projects.subscribe(value => {
		projectList = value;
	})
	let filteredProjects = projectList;
</script>

<section>
	<Filter projectList={projectList} bind:filteredProjects />
	{#if projectList.length > 0}
		{#each filteredProjects as project}
			<Panel post={true} slug={project.slug}>
				<PostHeader metadata={project.metadata} />
				<svelte:component this={project.component} />
			</Panel>
		{/each}
	{:else}
		<Panel>
			<p>Aucun projet à afficher.</p>
		</Panel>
	{/if}
</section>

<style lang="scss">
	@use '../lib/styles/var';
	section {
		display: grid;
		row-gap: var.$spacingBetweenElements;
	}
</style>
