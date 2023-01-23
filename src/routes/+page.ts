import { getProjects } from '$lib/functions/projects';

export const load = () => {
	const projects = getProjects();
	return {
		projects
	};
};
