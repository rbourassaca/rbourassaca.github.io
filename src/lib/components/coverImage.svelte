<script lang="ts">
	import src from '$lib/content/images/cristian-guanipa-DhnnfJnjb7I-unsplash.jpg?enhanced&w=200;400;800;1200;1400';
</script>

<div>
	<enhanced:img {src} alt="Pédalier sur un sol d'une scène." fetchpriority="high" loading="eager" />
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
