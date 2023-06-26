<script lang="ts">
	import { onMount } from 'svelte';
	import { setDarkMode, watchDarkMode } from '$lib/functions/darkMode';
	import Toggle from '$lib/components/toggle.svelte';
	// Variable utilisé pour le toggle
	let dark: boolean;
	/*
	Utilisation du cycle de vie onMount afin d'évité une erreur si 
	le code est éxécuté sur le serveur.
	*/
	onMount(() => {
		/*
		Création d'un setter afin de changer la variable dark à partir 
		d'un event listener.
		*/
		let darkModeSetter = (value: boolean) => {
			dark = value;
		};
		/*
		Assignation de la valeur initial a la variable dark.
		*/
		dark = window.matchMedia('(prefers-color-scheme: light)').matches;
		/*
		Utilisation de la fonction watchDarkMode afin d'écouter les changements par rapport
		au mode sombre.
		*/
		watchDarkMode(darkModeSetter);
	});
</script>

<svelte:head>
	<script lang="ts">
		/*
			Fonction utilisé pour détecter si le mode sombre est désactivé.
			Si le mode sombre est activé, on ajoute la classe dark au document.
			La fonction est utilisé dans l'entête du document pour éviter d'avoir un flash
			de la couleur non désiré.
		*/
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<span>
	<Toggle enabled={dark} action={setDarkMode} label="Mode sombre" />
</span>

<style lang="scss">
	@use '../styles/var.scss';

	span {
		position: absolute;
		top: 0;
		right: var.$spacingPagePaddingX;
		padding: 1rem;
		z-index: 100;
	}
</style>
