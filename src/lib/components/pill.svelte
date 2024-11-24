<script lang="ts">
	interface Props {
		text: string;
		color?: string;
		icon?: string | undefined;
		style?: string | undefined;
	}

	let {
		text,
		color = 'var(--color-border)',
		icon = undefined,
		style = undefined
	}: Props = $props();
</script>

<div style={`outline-color: ${color}; ${style}`}>
	{#if icon !== undefined}
		{@html icon}
	{/if}
	<span>{text}</span>
</div>

<style lang="scss">
	@use '../styles/var.scss';
	div {
		display: flex;
		align-items: center;
		gap: var.$spacingBetweenElementsSmall;
		padding: var.$spacingBetweenElementsSmall;
		border-radius: 1rem;
		width: fit-content;
		font-size: 0.75rem;
		outline: 2px solid;
		user-select: none;
		:global {
			svg {
				width: 1rem;
			}
		}
	}
</style>
