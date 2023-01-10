import { getProjects } from '$lib/functions/projects';
import type { PageLoad } from './projets/$types';

export const load = (() => {
	const projects = getProjects();
	return {
		projects
	};
}) satisfies PageLoad;
