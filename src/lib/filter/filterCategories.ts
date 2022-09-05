import { ProjectType } from "./../../components/project/type";
import { orderProjects } from "./orderProjects";

const filterCategories = (
	id: string,
	toggle: [string?],
	setToggle: Function,
	setProjectState: Function,
	projects: ProjectType
) => {
	if (toggle.includes(id) === false) {
		setToggle((prevState: []) => [...prevState, id]);
		setProjectState((prevState: []) => [
			...prevState.filter((item) => filterCategoriesItems(item, id)),
		]);
	} else {
		setToggle((prevState: []) => [
			...prevState.filter((item) => {
				return item !== id;
			}),
		]);
		setProjectState((prevState: []) => {
			// TODO: Le type 'ProjectType' doit avoir une méthode '[Symbol.iterator]()' qui retourne un itérateur. ts(2488)
			let arr: ProjectType[] = orderProjects([
				...new Set([...prevState, ...projects]),
			]);
			if (toggle.length > 1) {
				return arr.filter((item) => filterCategoriesItems(item, id, true));
			} else {
				return arr;
			}
		});
	}
};

const filterCategoriesItems = (
	item: ProjectType,
	id: string,
	reverse?: boolean
) => {
	let result = false;
	item.categories.forEach((cat) => {
		if (result === false) {
			reverse
				? (result = cat.categories_id.id !== id)
				: (result = cat.categories_id.id === id);
		}
	});
	return result;
};

export default filterCategories;
