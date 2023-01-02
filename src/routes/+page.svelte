<script lang="ts">
	import Filter from '$lib/components/filter.svelte';
	import Panel from '$lib/components/panel.svelte';
	const projects = Object.entries(import.meta.glob('/src/content/projects/*.svx', { eager: true }));
</script>

<section>
	<Filter />
	{#each projects as [path, module]}
		<Panel>
			<svelte:component this={module.default} />
		</Panel>
	{/each}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
	}
</style>
