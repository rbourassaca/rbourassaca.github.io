<script lang="ts">
	export let src: string;
	export let alt: string | undefined = undefined;
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
	export let role: string | undefined = undefined;
</script>

<img {src} {alt} {width} {height} {role} />
