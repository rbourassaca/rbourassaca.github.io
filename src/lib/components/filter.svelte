<script lang="ts">
	import Panel from '$lib/components/panel/panel.svelte';
	import Select from '$lib/components/select.svelte';
</script>

<Panel>
	<Select title="Ordre chronologique" options={['Descendant', 'Ascendant']} />
</Panel>
