<script lang="ts">
	import 'normalize.css';
	import CoverImage from "$lib/components/coverImage.svelte";
	import ProfilePicture from "$lib/components/profilePicture.svelte";
	import Footer from "$lib/components/footer.svelte";
</script>

<CoverImage />
<ProfilePicture />
<div class='content'>
	<slot />
</div>
<Footer />


<style lang="scss">
	@use "../lib/styles/var";
	@use "../lib/styles/font";

	:global{
		body{
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			margin: auto;
			padding: var.$spacingPagePaddingY var.$spacingPagePaddingX;
			max-width: var.$spacingPageWidth;
			background-color: var.$colorBg;
			div.content{
				flex: 1;
			}
		}
	}

</style>