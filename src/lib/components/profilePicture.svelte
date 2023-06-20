<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import src from '$lib/content/images/profile.jpg';
</script>

<div>
	<Image {src} alt="Raphael Bourassa" width="200" height="200" />
</div>

<style lang="scss">
	@use '../styles/var';
	$size: 200;
	div {
		display: flex;
		flex-direction: column;
		:global {
			img {
				align-self: center;
				border-radius: 100%;
				position: relative;
				top: calc(-#{$size}px/2);
				margin-bottom: calc(-#{$size}px/2);
				border: 4px var(--color-background-alt) solid;
			}
		}
	}
</style>
