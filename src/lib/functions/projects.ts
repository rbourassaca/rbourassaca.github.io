import { getSlugFromPath } from './getSlugFromPath';

export const getProjects = () => {
	const glob_import = import.meta.glob('/src/content/projects/*.svx', { eager: true });
	const projects = Object.entries(glob_import);
	return projects;
};

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project[0]) === slug;
	});
};
