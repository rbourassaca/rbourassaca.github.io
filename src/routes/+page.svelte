<script lang="ts">
	export let data;

	import Panel from '$lib/components/panel.svelte';
	import PostHeader from '$lib/components/post/postHeader.svelte';
	import Filter from '$lib/components/filter/filter.svelte';

	const projects = data.projects;

	let filteredProjects = projects;
</script>

<section>
	<Filter {projects} bind:filteredProjects />
	{#if projects.length > 0}
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
