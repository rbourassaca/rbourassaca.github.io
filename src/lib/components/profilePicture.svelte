<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import picture from '$lib/content/images/profile.jpg?w=200;400';
</script>

<div>
	<Image src={picture} alt="Raphael Bourassa" />
</div>

<style lang="scss">
	@use '../styles/var';
	$size: 200;
	div {
		display: flex;
		flex-direction: column;
		:global {
			picture {
				align-self: center;
				position: relative;
				top: calc(-#{$size}px/2);
				margin-bottom: calc(-#{$size}px/2);
				img {
					width: #{$size}px;
					height: #{$size}px;
					border-radius: 100%;
					border: 4px var(--color-background-alt) solid;
				}
			}
		}
	}
</style>
