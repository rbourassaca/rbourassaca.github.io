<article>
	<slot />
</article>

<style lang="scss">
	@use '../styles/var.scss';

	article {
		padding: 0.5rem 2rem;
		margin: 10px 0;
		height: fit-content;
		border-radius: var.$borderRadius;
		box-shadow: 5px 5px 10px var(--color-panel-shadow1), -5px -5px 10px var(--color-panel-shadow2);
		display: flex;
		flex-direction: column;
	}
</style>
