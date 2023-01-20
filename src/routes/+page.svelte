<script lang="ts">
	import type { projectType } from '$lib/types/project';
	import Panel from '$lib/components/panel/panel.svelte';
	export let data: { projects: projectType[] };
</script>

<section>
	{#if data.projects.length > 0}
		{#each data.projects as project}
			<Panel post={true} slug={project.slug}>
				<h2>{project.metadata.title}</h2>
				<svelte:component this={project.component} />
			</Panel>
		{/each}
	{:else}
		<p>Aucun projet à afficher.</p>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
	}
</style>
