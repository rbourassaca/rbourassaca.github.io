<script lang="ts">
	export let text: string;
	export let color: string;
</script>

<div style={`background-color: ${color}`}>
	<span>{text}</span>
</div>

<style lang="scss">
	@use '../styles/var.scss';
	div {
		padding: var.$spacingBetweenElementsSmall;
		border-radius: 1rem;
		width: fit-content;
		font-size: 0.75rem;
	}
</style>
