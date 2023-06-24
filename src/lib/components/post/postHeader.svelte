<script lang="ts">
	import type { metadataType } from '$lib/types/project';

	export let metadata: metadataType;
</script>

<span>
	<div>
		{#if metadata.categories !== undefined}
			{#each metadata.categories as category}
				{@html category.icon}
			{/each}
		{/if}
		<h2>
			{metadata.title}
		</h2>
	</div>
	<span>
		Créer le: {metadata.dateCreated.toLocaleDateString('fr-CA')}
		{#if metadata.dateUpdated !== undefined}
			- Mis à jour le {metadata.dateUpdated.toLocaleDateString('fr-CA')}
		{/if}
	</span>
	<div>
		{#if metadata.tags !== undefined}
			{#each metadata.tags as tag}
				<span style={`background-color: ${tag.colorHex}`}>{tag.name}</span>
			{/each}
		{/if}
	</div>
</span>

<style lang="scss">
	@use '../../styles/var.scss';

	span {
		div:first-child {
			display: flex;
			flex-wrap: nowrap;
			:global {
				svg {
					width: 1.75rem;
					min-width: 1.75rem;
					margin-right: var.$spacingBetweenElementsSmall;
				}
			}
			h2 {
				align-items: center;
			}
		}
		> span:first-of-type {
			color: var(--color-text-light);
		}
		> div:last-child {
			margin-top: var.$spacingBetweenElementsSmall;
			margin-bottom: var.$spacingBetweenElementsSmall;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: var.$spacingBetweenElementsSmall;
		}
		div > span {
			padding: var.$spacingBetweenElementsSmall;
			border-radius: 1rem;
			font-size: 0.75rem;
			width: fit-content;
		}
	}
</style>
