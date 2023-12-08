<script lang="ts">
	import 'normalize.css';
	import DarkModeToggle from '$lib/components/darkModeToggle/darkModeToggle.svelte';
	import CoverImage from '$lib/components/coverImage.svelte';
	import ProfilePicture from '$lib/components/profilePicture.svelte';
	import Info from '$lib/content/info.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Panel from '$lib/components/panel.svelte';
	import BackToTop from '$lib/components/backToTop.svelte';

	let title: string;
	let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<DarkModeToggle />
<CoverImage />
<ProfilePicture />
<h1>{title}</h1>
<section>
	<BackToTop />
	<div id="info">
		<Panel>
			<Info bind:title bind:description />
		</Panel>
		<Footer />
	</div>

	<slot />
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
			margin: auto;
			max-width: var.$spacingPageWidth;
			box-sizing: content-box;
			padding: var.$spacingPagePaddingY var.$spacingBetweenElementsSmall
				var.$spacingBetweenElementsSmall var.$spacingBetweenElementsSmall;
			@media screen and (min-width: var.$md) {
				padding: var.$spacingPagePaddingY var.$spacingPagePaddingX var.$spacingPagePaddingX
					var.$spacingPagePaddingX;
			}
		}
	}

	h1 {
		text-align: center;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var.$spacingBetweenElements;
		div#info {
			display: flex;
			flex-direction: column;
			gap: var.$spacingBetweenElements;
		}
		@media (min-width: var.$lg) {
			flex-direction: row;
			div#info {
				position: sticky;
				width: 400px;
				flex-shrink: 0;
				top: var.$spacingBetweenElements;
			}
		}
	}
</style>
