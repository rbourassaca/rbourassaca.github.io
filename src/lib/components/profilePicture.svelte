<img src="https://via.placeholder.com/200" alt="Profile" />

<style lang="scss">
	@use '../styles/var';
	$size: 200;
	img {
		height: $size;
		width: $size;
		align-self: center;
		border-radius: 100%;
		position: relative;
		top: calc(-#{$size}px/2);
		margin-bottom: calc(-#{$size}px/2);
		border: 4px var(--color-background) solid;
	}
</style>
