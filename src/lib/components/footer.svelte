<script lang="ts">
	const year = new Date().getFullYear()
</script>

<footer>
	&copy; Raphael Bourassa {year}
</footer>

<style lang='scss'>
	@use '../styles/var';
	footer{
		padding: var.$spacingBetweenElements 0;
	}
</style>