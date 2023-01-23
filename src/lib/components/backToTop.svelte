<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/button.svelte';

	let scrollPos: number;

	onMount(() => {
		scrollPos = window.scrollY;
		addEventListener('scroll', (e) => {
			scrollPos = window.scrollY;
		});
	});
</script>

{#if scrollPos > 300}
	<span>
		<a href="#top">
			<Button>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path
						d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
					/>
				</svg>
				Haut de la page
			</Button>
		</a>
	</span>
{/if}

<style lang="scss">
	@use '../styles/var.scss';

	span {
		position: fixed;
		bottom: 2rem;
		@media (max-width: var.$lg) {
			display: none;
		}
	}
</style>
