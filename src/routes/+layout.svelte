<script lang="ts">
	import 'normalize.css';
</script>

<slot />

<!--suppress CssUnknownTarget -->
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	:global{
		body {
			font-family: 'Montserrat', sans-serif;
			margin: 2rem 4rem;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	}
</style>