// Type de la fonction du setter pour le dark mode.
type darkModeSetterFunction = (value: boolean) => void;

/*
	Fonction créant un event listener pour pouvoir réagir
	quand le mode sombre est activé ou désactivé par l'hote.
*/
export const watchDarkMode = (darkModeSetter: darkModeSetterFunction) => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
		'change',
		(e) => {
			if (e.matches) {
				setDarkMode(false);
			} else {
				setDarkMode(true);
			}
			darkModeSetter(e.matches ? false : true);
		},
		{ passive: true }
	);
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
