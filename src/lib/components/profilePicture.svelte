<script lang="ts">
	import src from '$lib/content/images/profile.jpg';
</script>

<img {src} alt="Profile" width="200px" height="200px" />

<style lang="scss">
	@use '../styles/var';
	$size: 200;
	img {
		align-self: center;
		border-radius: 100%;
		position: relative;
		top: calc(-#{$size}px/2);
		margin-bottom: calc(-#{$size}px/2);
		border: 4px var(--color-background) solid;
	}
</style>
