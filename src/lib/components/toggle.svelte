<script lang="ts">
	export let enabled: boolean;
	export let action: (value: boolean) => void;
	const performAction = (e: Event) => {
		action((<HTMLInputElement>e.target).checked);
	};
</script>

<label>
	<input type="checkbox" checked={enabled} on:change={performAction} />
	<span />
</label>

<style lang="scss">
	@use '../styles/var.scss';

	$padding: 4px;
	$sizeX: 55px;
	/*	$sizeY
	- doit être la moitier ou plus petit que la moitier que $sizeX
	- calc($sizeX / 2) + $padding pour un point rond
	*/
	$sizeY: calc($sizeX / 2) + $padding;
	$transitionSpeed: 0.15s all ease-in-out;
	$colorOn: var(--colorOn, green);
	$colorOff: var(--colorOff, gray);
	$colorDot: var(--colorDot, var(--color-background));

	// Le toggle
	label {
		position: relative;
		display: inline-block;
		width: $sizeX;
		height: $sizeY;
		// La boite par défaut du navigateur
		input {
			opacity: 0;
			width: 0;
			height: 0;
		}
		// Le fond du toggle
		span {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $colorOff;
			transition: $transitionSpeed;
			border-radius: calc(#{$sizeX} / 2 - #{$padding});
		}
		// Le point du toggle
		span:before {
			content: '';
			position: absolute;
			height: calc(#{$sizeY} - #{$padding} * 2);
			width: calc(#{$sizeX} / 2 - #{$padding});
			left: $padding;
			bottom: $padding;
			background-color: $colorDot;
			transition: $transitionSpeed;
			border-radius: calc(#{$sizeX} / 2 - #{$padding});
		}
		// Le fond tu toggle quand la checkbox est activé
		input:checked + span {
			background-color: $colorOn;
		}

		// Le point du toggle quand la checkbox est désactivé
		input:checked + span:before {
			transform: translateX(calc(#{$sizeX} / 2 - #{$padding}));
		}
	}
</style>
