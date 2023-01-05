<script lang="ts">
	export let action: () => void = () => {};
</script>

<span on:click={action} on:keydown={action}>
	<slot />
</span>

<style lang="scss">
	@use '../styles/var.scss';

	span {
		user-select: none;
		color: var(--color-secondary);
		display: flex;
		column-gap: var.$spacingBetweenElementsSmall;
		padding: var.$spacingBetweenElementsSmall;
		cursor: pointer;
		border-radius: var.$borderRadius;
		:global {
			svg {
				height: 1rem;
				width: 1rem;
				fill: var(--color-secondary);
			}
		}
	}
	span:hover {
		color: var(--color-text);
		background-color: var(--color-secondary);
		:global {
			svg {
				fill: var(--color-text);
			}
		}
	}
	span:active {
		background-color: var(--color-primary);
	}
</style>
