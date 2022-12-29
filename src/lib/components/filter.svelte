<script lang="ts">
	import Panel from '$lib/components/panel.svelte';
	import Select from '$lib/components/select.svelte';
</script>

<Panel>
	<Select title="Ordre chronologique" options={['Descendant', 'Ascendant']} />
</Panel>
