import type { projectType } from '$lib/types/project';
import { getSlugFromPath } from './getSlugFromPath';

export const getProjects = (): projectType[] => {
	const glob_import = import.meta.glob('$lib/content/projects/*.svelte', {
		eager: true
	});
	const projects_entries = Object.entries(glob_import);
	let projects = projects_entries.map(([path, module]: any): projectType => {
		return {
			slug: getSlugFromPath(path),
			path,
			component: module.default,
			metadata: module.metadata
		};
	});
	return orderProjects(projects, true);
};

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project.path) === slug;
	});
};

export const orderProjects = (projects: projectType[], recentFirst: boolean) => {
	if (recentFirst) {
		return projects.sort((a, b) => {
			return b.metadata.dateCreated.getTime() - a.metadata.dateCreated.getTime();
		});
	} else {
		return projects.sort((a, b) => {
			return a.metadata.dateCreated.getTime() - b.metadata.dateCreated.getTime();
		});
	}
};
