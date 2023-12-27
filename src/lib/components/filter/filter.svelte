<script lang="ts">
	import { projectsFiltersStore } from '../../../stores';
	import Panel from '$lib/components/panel.svelte';
	import Button from '$lib/components/button.svelte';
	import Pill from '../pill.svelte';
	import { categories, tags } from '$lib/content/projects/_projectMetadata';

	const handleInvertFilter = () => {
		$projectsFiltersStore.reverse = !$projectsFiltersStore.reverse;
	};

	const handleTextFilter = (e: any) => {
		$projectsFiltersStore.text = e.target.value;
	};

	const handleCategoriesFilter = (category: string) => {
		if ($projectsFiltersStore.categories.includes(category)) {
			$projectsFiltersStore.categories.splice($projectsFiltersStore.categories.indexOf(category));
		} else {
			$projectsFiltersStore.categories.splice(0, $projectsFiltersStore.categories.length);
			$projectsFiltersStore.categories.push(category);
		}
		$projectsFiltersStore = $projectsFiltersStore;
	};

	const handleTagsFilter = (tag: string) => {
		if ($projectsFiltersStore.tags.find((filteredTag) => filteredTag === tag)) {
			$projectsFiltersStore.tags.splice($projectsFiltersStore.tags.indexOf(tag), 1);
		} else {
			$projectsFiltersStore.tags.push(tag);
		}
		$projectsFiltersStore = $projectsFiltersStore;
	};
</script>

<Panel>
	<div class="recherche">
		<input
			type="text"
			placeholder="Recherche..."
			on:input={(e) => handleTextFilter(e)}
			value={$projectsFiltersStore.text}
		/>
		<Button
			action={() => {
				handleInvertFilter();
			}}
			label="Inverser les projets."
		>
			{#if $projectsFiltersStore.reverse}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
					<path
						d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
					<path
						d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
					/>
				</svg>
			{/if}
		</Button>
	</div>
	<div class="categories">
		{#each Object.entries(categories).sort() as category}
			<button
				on:click={() => {
					handleCategoriesFilter(category[1].name);
				}}
			>
				<Pill
					icon={category[1].icon}
					text={category[1].name}
					style={$projectsFiltersStore.categories.length > 0 &&
					!$projectsFiltersStore.categories.includes(category[1].name)
						? 'opacity: 0.2;'
						: undefined}
				/>
			</button>
		{/each}
	</div>
	<div class="tags">
		{#each Object.entries(tags).sort() as tag}
			<button
				on:click={() => {
					handleTagsFilter(tag[1].name);
				}}
			>
				<Pill
					text={tag[1].name}
					color={tag[1].colorHex}
					style={$projectsFiltersStore.tags.length > 0 &&
					!$projectsFiltersStore.tags.includes(tag[1].name)
						? 'opacity: 0.2;'
						: undefined}
				/>
			</button>
		{/each}
	</div>
</Panel>

<style lang="scss">
	@use '../../styles/var.scss';

	div:not(:last-child) {
		padding-bottom: calc(var.$spacingBetweenElementsSmall * 2);
	}

	div.recherche {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var.$spacingBetweenElementsSmall;
		input[type='text'] {
			padding: 0.5rem;
			border-radius: var.$borderRadius;
			background-color: var(--color-background-alt);
			border: none;
			outline: 0;
			color: var(--text-color);
		}
		:global {
			article {
				gap: 1rem;
			}
			svg {
				height: 1.25rem;
				width: 1.25rem;
			}
		}
	}

	div.categories,
	div.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var.$spacingBetweenElementsSmall;
		justify-content: center;
	}

	button {
		all: unset;
		:global {
			div {
				cursor: pointer;
				transition: var.$transition;
			}
		}
	}

	@media (min-width: var.$xs) {
		div.recherche {
			display: flex;
			flex-direction: row;
			input[type='text'] {
				width: 100%;
			}
		}
	}
</style>
