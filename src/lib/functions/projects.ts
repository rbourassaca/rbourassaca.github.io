import { getSlugFromPath } from './getSlugFromPath';

export const getProjects = () => {
	return Object.entries(import.meta.glob('/src/content/projects/*.svx', { eager: true }));
};

export const getProject = (slug: string) => {
	return getProjects().find((project) => {
		return getSlugFromPath(project[0]) === slug;
	});
};
