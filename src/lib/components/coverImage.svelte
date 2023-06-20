<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import src from '$lib/content/images/cristian-guanipa-DhnnfJnjb7I-unsplash.jpg';
</script>

<div>
	<Image {src} width="1200" height="300" role="presentation" />
</div>

<style lang="scss">
	@use '../styles/var';
	div {
		display: flex;
		:global {
			img {
				width: 100%;
				object-fit: cover;
				border-radius: 0 0 var.$borderRadius var.$borderRadius;
			}
		}
	}
</style>
