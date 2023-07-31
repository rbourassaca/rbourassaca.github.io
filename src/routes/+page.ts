import type { projectType } from '$lib/types/project';
import { projectStore } from '../stores';

export const load = () => {
	let projects: projectType[] = [];
	projectStore.subscribe((value) => {
		projects = value;
	});
	return {
		projects: projects
	};
};
