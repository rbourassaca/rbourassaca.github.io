<script lang="ts">
	import type { PageData } from './$types';
	import Panel from '$lib/components/panel.svelte';
	export let data: PageData;
</script>

<section>
	{#if data.projects.length > 0}
		{#each data.projects as project}
			<Panel post={true} slug={project.slug}>
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
