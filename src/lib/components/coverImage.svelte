<script lang="ts">
	import src from '$lib/content/images/placeholder_1200x300.png';
</script>

<img {src} alt="Entête" width="1200" height="300" />

<style lang="scss">
	@use '../styles/var';

	img {
		width: 100%;
		object-fit: cover;
		border-radius: 0 0 var.$borderRadius var.$borderRadius;
	}
</style>
