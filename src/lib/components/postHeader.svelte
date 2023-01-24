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
	<span>
		Créer le: {metadata.dateCreated.toLocaleDateString('fr-CA')}
		{#if metadata.dateCreated.getTime() !== metadata.dateUpdated.getTime()}
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
	@use '../styles/var.scss';

	span {
		h2 {
			display: flex;
			align-items: center;
			:global {
				svg {
					height: 1.75rem;
				}
			}
		}
		> span:first-of-type {
			color: var(--color-text-light);
		}
		> div {
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
