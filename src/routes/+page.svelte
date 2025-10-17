<script lang="ts">
	import { browser } from '$app/environment';
	import AllDates from './AllDates.svelte';
	import Date from './Date.svelte';
	import Hello from './Hello.svx';

	let { data } = $props();
</script>

<header class="title">
	<img
		width="42"
		height="42"
		src="/favicon.png"
		alt="Ein Ring, jeweils zur hälfte in den Farben der Bi und Pan Flaggen"
	/>
	<h1>Bi und Pan Treff</h1>
</header>

<main>
	<section>
		<Hello></Hello>
	</section>

	<section>
		<h2>Bestätigte Termine:</h2>

		{#each data.termine as date}
			<Date {date} />
		{/each}

		{#if browser}
			<AllDates dates={data.termine}></AllDates>
		{/if}
	</section>
</main>

<style>
	.title {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
