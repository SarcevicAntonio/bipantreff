<script>
	import './style.css';
	let { children } = $props();
</script>

<main>
	{@render children?.()}
</main>
