import type { filters } from '$lib/types/filters';

import { writable, readable } from 'svelte/store';
import { getProjects } from '$lib/functions/projects';

export const projectsStore = readable(getProjects());
export const projectsFiltersStore = writable<filters>({
	text: '',
	categories: [],
	tags: [],
	reverse: false
});
