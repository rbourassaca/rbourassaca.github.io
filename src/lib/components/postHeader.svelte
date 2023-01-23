<script lang="ts">
	import type { metadataType } from '$lib/types/project';

	export let metadata: metadataType;
</script>

<span>
	<h2>
		{#if metadata.categories !== undefined}
			{#each metadata.categories as category}
				{@html category.icon}
			{/each}
		{/if}
		&nbsp;{metadata.title}
	</h2>
	{#if metadata.tags !== undefined}
		{#each metadata.tags as tag}
			<span style={`background-color: ${tag.colorHex}`}>{tag.name}</span>
		{/each}
	{/if}
</span>

<style lang="scss">
	@use '../styles/var.scss';

	span {
		margin-bottom: var.$spacingBetweenElements;
		h2 {
			display: flex;
			align-items: center;
			:global {
				svg {
					height: 1.75rem;
				}
			}
		}
		> span {
			padding: var.$spacingBetweenElementsSmall;
			border-radius: 1rem;
			font-size: 0.75rem;
		}
		> span:not(:last-child) {
			margin-right: var.$spacingBetweenElementsSmall;
		}
	}
</style>
