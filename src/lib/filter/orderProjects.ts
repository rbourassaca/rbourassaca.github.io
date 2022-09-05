import { ProjectType } from "./../../components/project/type";
const field = "date_created";

export const orderProjects = (projects: ProjectType[]) => {
	return projects.sort((a, b) => {
		if (a[field] > b[field]) {
			return -1;
		} else if (a[field] < b[field]) {
			return 1;
		} else {
			return 0;
		}
	});
};
