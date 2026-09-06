<script lang="ts">
	import bipancake from '$lib/assets/bipancake.png';
	import DateArticle from './DateArticle.svelte';
	import Description from './Description.svx';
	import GetAllDates from './GetAllDates.svelte';

	let { data } = $props();

	const DATES_ABOVE_FOLD = 5;
	const more_dates = $derived(data.dates.slice(DATES_ABOVE_FOLD));
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
			class="bipancake"
			alt="Eine Zeichnung eines Tellers mit Pancakes und einer Biene beschriftet mit 'Bi & Pan Treff'. An der linken Seite schaut eine Katze um die Ecke beschriftet mit 'in der a.cat'."
			src={bipancake}
		/>
	</section>

	<section>
		<h2>Bestätigte Termine</h2>

		{#each data.dates.slice(0, DATES_ABOVE_FOLD) as date}
			<DateArticle {date} />
		{:else}
			leider keine termine gefunden 😥
		{/each}

		{#if more_dates.length}
			<details>
				<summary>Weitere Termine</summary>
				{#each more_dates as date}
					<DateArticle {date} />
				{/each}
				<GetAllDates dates={data.dates} />
			</details>
		{:else}
			<GetAllDates dates={data.dates} />
		{/if}
	</section>

	<section>
		<h2>Beschreibung</h2>

		<Description />
	</section>

	<!--
    <section>
		<h2>Sonstiges</h2>

		<ul>
			<li>
				Kreativtreff für Bi+Personen am {formatDate('2026-08-09 15:00')} in der a.cat, Herwarthstraße
				7, 48143 Münster
			</li>
		</ul>
	</section>
    -->
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

	h2 {
		margin-block: 2rem 1rem;
	}

	.bipancake {
		border-radius: 1.5rem;
	}
</style>
