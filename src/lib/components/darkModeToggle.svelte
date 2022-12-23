<script lang="ts">
	import { onMount } from 'svelte';
	import { detectDarkMode, setDarkMode } from '$lib/functions/darkMode';
	import Toggle from '$lib/components/toggle.svelte';
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
			Assignation de la valeur initial a la variable dark par le biais
			de la fonction detectDarkMode avec les paramêtre true et
			darkModeSetter afin d'écouter si un changement se produit pendant
			que l'utilisateur est sur le site web.
		*/
		dark = detectDarkMode(true, darkModeSetter);
	});
</script>

<span class="darkModeToggle">
	<Toggle enabled={dark} action={setDarkMode} />
</span>

<style lang="scss">
	@use '../styles/var.scss';

	span.darkModeToggle {
		position: absolute;
		top: 0;
		right: var.$spacingPagePaddingX;
		padding: 1rem;
	}
</style>
