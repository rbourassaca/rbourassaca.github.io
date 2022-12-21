// Type de la fonction du setter pour le dark mode.
type darkModeSetterFunction = (value: boolean) => void;

/*
	Fonction créant un event listener pour pouvoir réagir
	quand le mode sombre est activé ou désactivé par l'hote.
*/
const watchDarkMode = (darkModeSetter: darkModeSetterFunction) => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
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
		return false;
	} else {
		return true;
	}
};
