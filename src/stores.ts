import { writable } from "svelte/store";

import { getProjects } from '$lib/functions/projects';

export const projects = writable(getProjects());