import type { projectType } from '$lib/types/project';
import { getSlugFromPath } from './getSlugFromPath';

export const getProjects = (): projectType[] => {
	const glob_import = import.meta.glob('$lib/content/projects/*.svelte', {
		eager: true
	});
	const projects = Object.entries(glob_import);
	return projects.map(([path, module]: any): projectType => {
		return {
			slug: getSlugFromPath(path),
			path,
			component: module.default,
			metadata: module.metadata
		};
	});
};

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project.path) === slug;
	});
};
