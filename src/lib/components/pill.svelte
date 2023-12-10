<script lang="ts">
	export let text: string;
	export let color: string = 'var(--color-border)';
	export let icon: string | undefined = undefined;
</script>

<div style={`outline-color: ${color};`}>
	{#if icon !== undefined}
		{@html icon}
	{/if}
	<span>{text}</span>
</div>

<style lang="scss">
	@use '../styles/var.scss';
	div {
		display: flex;
		gap: var.$spacingBetweenElementsSmall;
		padding: var.$spacingBetweenElementsSmall;
		border-radius: 1rem;
		width: fit-content;
		font-size: 0.75rem;
		outline: 1px solid;
		:global {
			svg {
				width: 1rem;
			}
		}
	}
</style>
