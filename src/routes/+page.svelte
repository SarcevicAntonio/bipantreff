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
		{@const date = new Date(new Date(termin).setHours(19))}
		{@const endDate = new Date(new Date(termin).setHours(22))}
		{#snippet date_label()}
			{date.toLocaleDateString('de-DE', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			})}
		{/snippet}

		<li>
			{#if endDate.valueOf() < new Date().valueOf()}
				<s> {@render date_label()}</s>
			{:else}
				{@render date_label()}
			{/if}
		</li>
	{/each}
</ul>

<style>
	.title {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	li {
		font-variant-numeric: tabular-nums;
	}

	s {
		opacity: 0.6;
	}
</style>
