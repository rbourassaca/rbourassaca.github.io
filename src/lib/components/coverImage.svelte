<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import src from '$lib/content/images/cristian-guanipa-DhnnfJnjb7I-unsplash.jpg?w=300;600;800;1000;1200';
</script>

<div>
	<Image {src} role="presentation" loading="eager" />
</div>

<style lang="scss">
	@use '../styles/var';
	div {
		display: flex;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		height: 300px;
		width: 100%;
		overflow: hidden;
		border-radius: 0 0 var.$borderRadius var.$borderRadius;
		:global {
			picture {
				width: 100%;
				img {
					object-fit: cover;
					width: 100%;
				}
			}
		}
	}
</style>
