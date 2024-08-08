import { toastsStore } from '../../stores';
const time = 2000;

export const createToast = (text: string) => {
	toastsStore.update((values) => {
		const id = Date.now();
		values.unshift({ id, text: text });
		setTimeout(removeToast, time, id);
		return values;
	});
};

const removeToast = (id: number) => {
	toastsStore.update((values) => {
		const i = values.findIndex((value) => {
			return (value.id = id);
		});
		values.splice(i, 1);
		return values;
	});
};
