<script lang="ts">
	interface Props {
		action?: () => void;
		label?: string | undefined;
		disabled?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		action = () => {},
		label = undefined,
		disabled = false,
		children
	}: Props = $props();
</script>

<span
	onclick={() => {
		if (!disabled) {
			action();
		}
	}}
	onkeydown={() => {
		if (!disabled) {
			action();
		}
	}}
	role="button"
	tabindex="0"
	aria-label={label}
	class={disabled ? 'disabled' : ''}
>
	{@render children?.()}
</span>

<style lang="scss">
	@use '../styles/var.scss';

	span {
		user-select: none;
		color: var(--color-primary);
		display: flex;
		align-items: center;
		column-gap: var.$spacingBetweenElementsSmall;
		padding: var.$spacingBetweenElementsSmall;
		width: fit-content;
		cursor: pointer;
		border-radius: var.$borderRadius;
    	transition: var.$transition;
    	outline: 0 solid var(--color-border);
		:global {
			svg {
				height: 1rem;
				width: 1rem;
				fill: var(--color-primary);
			}
		}
	}
	@media (hover: hover) {
		span:not(.disabled):hover {
			outline: 1px solid var(--color-border);
			background: var(--color-background-alt);
		}
	}
	span:active {
    filter: var(--hover-brightness);
	}
	span.disabled {
		color: var(--color-text-light);
    cursor: auto;
		:global {
			svg {
				fill: var(--color-text-light);
			}
		}
	}
	span.disabled:active {
		color: var(--color-text-light);
	}
	@media (hover: hover) {
		span.disabled:hover {
			color: var(--color-text-light);
			background-color: transparent;
		}
	}
</style>
