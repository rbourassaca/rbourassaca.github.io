import { writable } from 'svelte/store';
import { getProjects } from '$lib/functions/projects';

export const projectStore = writable(getProjects());
