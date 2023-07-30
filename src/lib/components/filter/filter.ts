import type { projectType } from '$lib/types/project';

export const search = (
	string: string,
	projects: projectType[],
	recentFirst: boolean
): projectType[] => {
	if (string.length > 0) {
		return projects.filter((project) =>
			project.metadata.title.toLowerCase().includes(string.toLowerCase())
		);
	} else {
		if (recentFirst) {
			return projects;
		} else {
			return projects.reverse();
		}
	}
};
