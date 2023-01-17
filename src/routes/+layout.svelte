<script lang="ts">
	import 'normalize.css';
	import DarkModeToggle from '$lib/components/darkModeToggle.svelte';
	import CoverImage from '$lib/components/coverImage.svelte';
	import ProfilePicture from '$lib/components/profilePicture.svelte';
	import Info from '$lib/content/info.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Panel from '$lib/components/panel.svelte';

	let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<DarkModeToggle />
<CoverImage />
<ProfilePicture />
<h1>{title}</h1>
<section>
	<div>
		<Panel>
			<Info bind:title />
		</Panel>
		<Footer />
	</div>
	<div>
		<slot />
	</div>
</section>

<style lang="scss">
	@use '../lib/styles/var';
	@use '../lib/styles/font';
	@use '../lib/styles/colors.scss';

	:global {
		body {
			position: relative;
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			margin: auto;
			max-width: var.$spacingPageWidth;
			padding: var.$spacingPagePaddingY 1rem;
			@media screen and (min-width: var.$md) {
				padding: var.$spacingPagePaddingY var.$spacingPagePaddingX;
			}
		}
	}

	h1 {
		text-align: center;
	}

	section {
		display: flex;
		flex-direction: column;
		column-gap: var.$spacingBetweenElements;
		div:first-child {
			width: 100%;
		}
		div:nth-child(2) {
			width: 100%;
		}
		@media screen and (min-width: var.$lg) {
			flex-direction: row;
			div:first-child {
				width: calc(1 / 3 * 100%);
			}
			div:nth-child(2) {
				width: calc(2 / 3 * 100%);
			}
		}
	}
</style>
