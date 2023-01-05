export const getSlugFromPath = (path: string) => {
	const arr = path.split('/');
	const slug = arr[arr.length - 1].split('.')[0];
	return slug;
};
