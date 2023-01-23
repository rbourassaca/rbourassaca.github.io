<script lang="ts">
	import Panel from '$lib/components/panel/panel.svelte';
	import Button from '$lib/components/button.svelte';
	import type { projectType } from '$lib/types/project';
	import { orderProjects } from '$lib/functions/projects';
	export let projectList: projectType[];
	export let filteredProjects: projectType[];
	let recentFirst: boolean = true;
	const invert = (bool: boolean) => {
		recentFirst = !bool;
		filteredProjects = orderProjects(projectList, recentFirst);
	};
</script>

<Panel>
	<div>
		<input type="text" placeholder="Recherche..." />
		<Button
			action={() => {
				invert(recentFirst);
			}}
		>
			{#if recentFirst}
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
</Panel>

<style lang="scss">
	@use '../styles/var.scss';

	div {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: calc(var.$spacingBetweenElements / 2);
		margin: var.$spacingBetweenElementsSmall * 2 0;
		input[type='text'] {
			padding: 0.5rem;
			border-radius: var.$borderRadius;
			background-color: var(--color-background-alt);
			border: none;
			outline: 0;
			color: var(--text-color);
		}
		:global {
			svg {
				height: 1.25rem;
				width: 1.25rem;
			}
		}
	}
</style>
