<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import src from '$lib/content/images/cristian-guanipa-DhnnfJnjb7I-unsplash.jpg?w=300;600;900;1200;2400';
</script>

<div>
	<Image {src} role="presentation" loading="eager" />
</div>

<style lang="scss">
	$height: 300px;
	@use '../styles/var';
	div {
		display: flex;
		align-items: center;
		height: $height;
		overflow: hidden;
		border-radius: 0 0 var.$borderRadius var.$borderRadius;
		:global {
			picture {
				width: 100%;
				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
					min-height: $height;
				}
			}
		}
	}
</style>
