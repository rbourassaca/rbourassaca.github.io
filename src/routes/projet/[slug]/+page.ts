import { getProject } from '$lib/functions/projects';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const project = getProject(params.slug);
	if (project !== undefined) {
		return {
			project
		};
	}
	error(404, "La page demandé n'existe pas.");
}) satisfies PageLoad;
