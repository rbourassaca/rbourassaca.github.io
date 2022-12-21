// Type de la fonction du setter pour le dark mode.
type darkModeSetterFunction = (value: boolean) => void;

/*
	Fonction créant un event listener pour pouvoir réagir
	quand le mode sombre est activé ou désactivé par l'hote.
*/
const watchDarkMode = (darkModeSetter: darkModeSetterFunction) => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		if (e.matches) {
			setDarkMode(false);
		} else {
			setDarkMode(true);
		}
		darkModeSetter(e.matches ? false : true);
	});
};

/*
	Fonction utilisé pour détecter si le mode sombre est désactivé.
	Le paramètre watch est utilisé si on veut suivre les changement après
	avoir fait la première détection.
	Le paramètre darkModeSetter est la fonction du setter pour changer la
	valeur de l'état du mode sombre.
*/
export const detectDarkMode = (
	watch: boolean,
	darkModeSetter?: darkModeSetterFunction
): boolean => {
	if (watch === true && darkModeSetter) {
		watchDarkMode(darkModeSetter);
	}
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setDarkMode(false);
		return false;
	} else {
		setDarkMode(true);
		return true;
	}
};

/*
	On appel la fonction setDarkMode afin d'ajouter ou enlever
	la classe dark du body.
*/
export const setDarkMode = (value: boolean) => {
	if (value === false) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};
