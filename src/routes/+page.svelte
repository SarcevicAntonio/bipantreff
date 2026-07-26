<script lang="ts">
	import bipancake from '$lib/assets/bipancake.png';
	import Date from './Date.svelte';
	import Description from './Description.svx';
	import GetAllDates from './GetAllDates.svelte';

	let { data } = $props();
</script>

<header>
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
		<p>
			Ein offener Treff in Münster, der alle bi+, pan- und nicht monosexuellen Menschen und die, die
			sich unsicher sind willkommen heißt.
		</p>

		<img
			alt="Eine Zeichnung eines Tellers mit Pancakes einer Biene beschriftet mit Bi & Pan Treff. An der linken Seite schaut eine Katze um die Ecke beschriftet mit in der a.cat."
			src={bipancake}
		/>
	</section>

	<section>
		<h2>Bestätigte Termine</h2>

		{#each data.dates as date}
			<Date {date} />
		{:else}
			leider keine termine gefunden 😥
		{/each}

		<GetAllDates dates={data.dates}></GetAllDates>
	</section>

	<section>
		<Description />
	</section>
</main>

<style>
	header,
	main {
		margin-inline: auto;
		max-width: 60ch;
	}

	header {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	main {
		margin-bottom: 3rem;
	}
</style>
