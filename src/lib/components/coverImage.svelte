<script lang="ts">
	import src from '$lib/content/images/cristian-guanipa-DhnnfJnjb7I-unsplash.jpg';
</script>

<img {src} alt="Entête, créer par Cristian Guanipa sur Unsplash." role="presentation" width="1200" height="300" />

<style lang="scss">
	@use '../styles/var';

	img {
		width: 100%;
		object-fit: cover;
		border-radius: 0 0 var.$borderRadius var.$borderRadius;
	}
</style>
