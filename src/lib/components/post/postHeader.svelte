<script lang="ts">
	import type { projectMetadataType } from '$lib/types/project';
	import Pill from '$lib/components/pill.svelte';
	export let metadata: projectMetadataType;
</script>

<div>
	<div>
		{#if metadata.categories !== undefined}
			{#each metadata.categories as category}
				{@html category.icon}
			{/each}
		{/if}
		<span>
			<h2>
				{metadata.title}
			</h2>
			<div>
				{#if metadata.tags !== undefined}
					{#each metadata.tags as tag}
						<Pill color={tag.colorHex} text={tag.name} />
					{/each}
				{/if}
			</div>
		</span>
	</div>
	<span class="dates">
		{#if metadata.dateUpdated !== undefined}
			Mis à jour le: {metadata.dateUpdated.toLocaleDateString('fr-CA')}
			<br />
		{/if}
		Créer le: {metadata.dateCreated.toLocaleDateString('fr-CA')}
	</span>
</div>

<style lang="scss">
	@use '../../styles/var.scss';

	div:first-child {
		margin-bottom: var.$spacingBetweenElementsSmall;
		div:first-child {
			display: flex;
			align-items: center;
			span {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: var.$spacingBetweenElementsSmall;
				justify-content: space-between;
				width: 100%;
				div {
					display: flex;
					flex-wrap: wrap;
					gap: var.$spacingBetweenElementsSmall;
				}
			}
			:global {
				svg {
					width: 1.75rem;
					min-width: 1.75rem;
					height: fit-content;
					margin-right: var.$spacingBetweenElementsSmall;
				}
			}
			h2 {
				align-items: center;
				margin-bottom: 0;
			}
		}
		> span.dates {
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
