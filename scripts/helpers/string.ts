export const findString = (data: string, search: string, from: string) => {
	const searchEndIndex: number = data.indexOf(search) + search.length + 1;
	return data.indexOf(from, searchEndIndex);
};

export const insertString = (data: string, position: number, text: string) => {
	return `${data.substring(0, position)}, '${text}'${data.substring(position)}`;
};
