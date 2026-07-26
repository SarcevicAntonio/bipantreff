<script lang="ts">
	import { browser } from '$app/environment';
	import CalendarDownload from '$lib/icons/CalendarDownload.svelte';
	import CalendarFuture from '$lib/icons/CalendarFuture.svelte';
	import ical, { ICalCalendarMethod } from 'ical-generator';
	import { eventDetails } from '../ical';
	import type { PageData } from './$types';

	let { date }: { date: PageData['dates'][number] } = $props();

	const calendar = ical({ name: 'Bi und Pan Treff in der a.cat' });
	calendar.method(ICalCalendarMethod.REQUEST);
	calendar.createEvent({ ...date, ...eventDetails });
	const blob = new Blob([calendar.toString()], { type: 'text/calendar' });
</script>

{#if date.end.valueOf() >= new Date().valueOf()}
	<article>
		{#if browser}
			<a
				href={URL.createObjectURL(blob)}
				download="bi-pan-treff-a.cat-{date.string}.ics"
				title="Diesen Termine als as .ical Datei herunterladen"
			>
				<CalendarDownload />
			</a>
		{:else}
			<CalendarFuture />
		{/if}
		<span>
			{date.start.toLocaleString('de-DE', {
				weekday: 'short',
				year: '2-digit',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit'
			})} (Beginn: 19:30)
		</span>
	</article>
{/if}

<style>
	article {
		margin-block: 0.5rem;
		display: flex;
		align-items: center;
		min-height: var(--link-height);
		font-variant-numeric: tabular-nums;
		gap: 0.5rem;
	}

	a {
		min-height: var(--link-height);
		display: inline-flex;
		align-items: center;
	}
</style>
