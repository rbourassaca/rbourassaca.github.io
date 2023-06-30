<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import src from '$lib/content/images/cristian-guanipa-DhnnfJnjb7I-unsplash.jpg?w=300;600;900;1200;2400';
</script>

<div>
	<Image {src} role="presentation" loading="eager" />
</div>

<style lang="scss">
	$height: 300px;
	$heightSmall: 200px;
	@use '../styles/var';
	div {
		display: flex;
		align-items: center;
		height: $heightSmall;
		overflow: hidden;
		border-radius: 0 0 var.$borderRadius var.$borderRadius;
		@media (min-width: var.$sm) {
			height: $height;
			:global {
				picture {
					img {
						min-height: $height;
					}
				}
			}
		}
		:global {
			picture {
				width: 100%;
				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
					min-height: $heightSmall;
				}
			}
		}
	}
</style>
