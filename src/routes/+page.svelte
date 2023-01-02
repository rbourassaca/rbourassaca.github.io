<script lang="ts">
	import Filter from '$lib/components/filter.svelte';
	import Panel from '$lib/components/panel.svelte';
	const projects = Object.entries(import.meta.glob('/src/content/projects/*.svx', { eager: true }));
</script>

<Filter />

{#each projects as [path, module]}
	<Panel>
		<svelte:component this={module.default} />
	</Panel>
{/each}
