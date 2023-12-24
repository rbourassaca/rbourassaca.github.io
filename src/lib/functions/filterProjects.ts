import type { projectType } from '$lib/types/project';
import type { filters } from '$lib/types/filters';

import { projectsStore } from '../../stores';

let projects: projectType[];

projectsStore.subscribe((value) => {
	projects = value;
});

export const filterProjects = (filters: filters): projectType[] => {
	let projectsFilteredText: projectType[] = projects;
	let projectsFilteredCategories: projectType[] = projects;
	let projectsFilteredTags: projectType[] = projects;
	let output: projectType[] = [];

	if (filters.text.length > 0) {
		projectsFilteredText = filterText(filters.text);
	}
	if (filters.categories.length > 0) {
		projectsFilteredCategories = filterCategories(filters.categories);
	}
	if (filters.tags.length > 0) {
		projectsFilteredTags = filterTags(filters.tags);
	}

	if (filters.text.length === 0 && filters.categories.length === 0 && filters.tags.length === 0) {
		output = projects;
	} else {
		output = projectsFilteredText.filter(
			(p) => projectsFilteredCategories.includes(p) && projectsFilteredTags.includes(p)
		);
	}

	if (filters.reverse) {
		return output.toReversed();
	} else {
		return output;
	}
};

const filterText = (value: string): projectType[] => {
	return projects.filter((project) =>
		project.metadata.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
	);
};

const filterCategories = (values: string[]): projectType[] => {
	return projects.filter((project) =>
		project.metadata.categories.some((category) => values.includes(category.name))
	);
};

const filterTags = (values: string[]): projectType[] => {
	return projects.filter((project) =>
		project.metadata.tags.some((tag) => values.includes(tag.name))
	);
};
