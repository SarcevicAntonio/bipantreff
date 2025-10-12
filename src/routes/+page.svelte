<script lang="ts">
	import Hello from './Hello.svx';
	let { data } = $props();
</script>

<div class="title">
	<img
		width="42"
		height="42"
		src="/favicon.png"
		alt="Ein Ring, jeweils zur hälfte in den Farben der Bi und Pan Flaggen"
	/>
	<h1>Bi und Pan Treff</h1>
</div>

<Hello></Hello>

<h2>Bestätigte Termine:</h2>

<ul>
	{#each data.termine as termin}
		{@const date = new Date(termin)}
		<li>
			{date.toLocaleDateString('de-DE', {
				// weekday: 'long',
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			})}
		</li>
	{/each}
</ul>

<style>
	li {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
