<script lang="ts">
	import type { projectMetadataType } from '$lib/types/project';
	import Pill from '$lib/components/pill.svelte';
	export let metadata: projectMetadataType;
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
		{#if metadata.dateUpdated !== undefined}
			Mis à jour le: {metadata.dateUpdated.toLocaleDateString('fr-CA')}
			<br />
		{/if}
		Créer le: {metadata.dateCreated.toLocaleDateString('fr-CA')}
	</span>
	<div>
		{#if metadata.tags !== undefined}
			{#each metadata.tags as tag}
				<Pill color={tag.colorHex} text={tag.name} />
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
	}
</style>
