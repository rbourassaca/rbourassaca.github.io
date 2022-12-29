<script lang="ts">
	export let title: string;
	export let options: string[];
</script>

<span>
	<label for={title}>{title}:</label>
	<select name={title}>
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
</span>

<style lang="scss">
	@use './../styles/var.scss';
	span {
		margin: var.$spacingBetweenElementsSmall 0;
		label {
			margin-right: var.$spacingBetweenElementsSmall;
		}
		select {
			padding: var.$spacingBetweenElementsSmall;
			border-radius: var.$borderRadius;
			border: none;
			background-color: var(--color-secondary);
		}
	}
</style>
