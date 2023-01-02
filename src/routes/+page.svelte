<script lang="ts">
	import Filter from '$lib/components/filter.svelte';
	import Panel from '$lib/components/panel.svelte';
	const projects = Object.entries(import.meta.glob('/src/content/projects/*.svx', { eager: true }));
</script>

<section>
	{#if projects.length > 0}
		<Filter />
		{#each projects as [path, module]}
			<Panel>
				<svelte:component this={module.default} />
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
