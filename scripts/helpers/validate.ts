export const validateText = (t: string) => {
	if (t.length > 0) {
		if (t.match(/^[\p{L}\p{N} ]*$/u)) {
			return true;
		} else {
			return 'Only character from a to z, 0 to 9 and spaces are allowed.';
		}
	} else {
		return 'You must enter a name.';
	}
};

export const validateColor = (t: string) => {
	if (t.length >= 7 && t.length <= 9) {
		if (t.charAt(0) === '#') {
			return true;
		} else {
			return 'The color must start with #';
		}
	} else {
		return 'Length must be between 7 and 9 character. Ex: #000000';
	}
};
