<script lang="ts">
	import type { projectType } from '$lib/types/project.js';

	import { projectsFiltersStore } from '../stores.js';
	import { filterProjects } from '$lib/functions/filterProjects.js';
	import Panel from '$lib/components/panel.svelte';
	import PostHeader from '$lib/components/post/postHeader.svelte';
	import Filter from '$lib/components/filter/filter.svelte';

	let filteredProjects: projectType[] = [];

	projectsFiltersStore.subscribe((value) => {
		filteredProjects = filterProjects(value);
	});
</script>

<section>
	<Filter />
	{#if filteredProjects.length > 0}
		{#each filteredProjects as project}
			<Panel post={true} slug={project.slug}>
				<PostHeader metadata={project.metadata} />
				<svelte:component this={project.component} />
			</Panel>
		{/each}
	{:else}
		<Panel>
			<p>
				Aucun projet à afficher.
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
					<path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
					/>
				</svg>
			</p>
		</Panel>
	{/if}
</section>

<style lang="scss">
	@use '../lib/styles/var';
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		row-gap: var.$spacingBetweenElements;
		p {
			display: flex;
			gap: 0.5rem;
			align-items: center;
		}
	}
</style>
