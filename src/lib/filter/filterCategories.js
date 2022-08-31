const filterCategories = (id, toggle, setToggle, setProjectState, projects) => {
	if (toggle.includes(id) === false) {
		setToggle((prevState) => [...prevState, id]);
		setProjectState((prevState) => [
			...prevState.filter((item) => filterCategoriesItems(item, id)),
		]);
	} else {
		setToggle((prevState) => [
			...prevState.filter((item) => {
				return item !== id;
			}),
		]);
		setProjectState((prevState) => {
			let arr = [...new Set([...prevState, ...projects])];
			if (toggle.length > 1) {
				return arr.filter((item) => filterCategoriesItems(item, id, true));
			} else {
				return arr;
			}
		});
	}
};

const filterCategoriesItems = (item, id, reverse) => {
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
