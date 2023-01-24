<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	&copy; Raphael Bourassa {year}
</footer>

<style lang="scss">
	@use '../styles/var';
	footer {
		color: var(--color-text-light);
		padding: 1.5rem 0;
	}
</style>
