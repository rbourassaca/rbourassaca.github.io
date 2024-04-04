<script lang="ts">
	export let action: () => void = () => {};
	export let label: string | undefined = undefined;
	export let disabled: boolean = false;
</script>

<span
	on:click={() => {
		if (!disabled) {
			action();
		}
	}}
	on:keydown={() => {
		if (!disabled) {
			action();
		}
	}}
	role="button"
	tabindex="0"
	aria-label={label}
	class={disabled ? 'disabled' : ''}
>
	<slot />
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
			outline: 2px solid var(--color-primary);
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
