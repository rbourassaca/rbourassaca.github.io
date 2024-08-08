import type { filters } from '$lib/types/filters';
import type { toast } from '$lib/types/toast';

import { writable, readable } from 'svelte/store';
import { getProjects } from '$lib/functions/projects';

export const projectsStore = readable(getProjects());
export const projectsFiltersStore = writable<filters>({
	text: '',
	categories: [],
	tags: [],
	reverse: false
});
export const toastsStore = writable<toast[]>([]);
