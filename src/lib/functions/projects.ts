import type { tagType, projectType } from '$lib/types/project';
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
	projects.forEach((project) => {
		orderTags(project.metadata.tags);
	});
	return orderProjects(projects);
};

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project.path) === slug;
	});
};

const orderProjects = (projects: projectType[]) => {
	projects = projects.sort((a, b) => {
		return b.metadata.dateCreated.getTime() - a.metadata.dateCreated.getTime();
	});
	return projects;
};

const orderTags = (tags: tagType[]) => {
	return tags.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
};
