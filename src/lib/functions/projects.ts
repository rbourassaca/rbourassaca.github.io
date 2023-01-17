import { getSlugFromPath } from './getSlugFromPath';

type project = { slug: string; path: string; component: any };

export const getProjects = (): project[] => {
	const glob_import = import.meta.glob('$lib/content/projects/*.svelte', { eager: true });
	const projects = Object.entries(glob_import);
	return projects.map(([path, module]: any) => {
		return {
			slug: getSlugFromPath(path),
			path,
			component: module.default
		};
	});
};

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project.path) === slug;
	});
};
