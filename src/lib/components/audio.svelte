<script lang="ts">
	export let src: string;
</script>

<audio controls controlsList="nodownload">
	<source {src} type="audio/mpeg" />
	Le navigateur ne prend pas en charge l'élément audio.
</audio>

<style lang="scss">
	@use '../styles/var.scss';
	audio {
		margin: var.$spacingBetweenElementsSmall 0;
		width: 100%;
	}
</style>
