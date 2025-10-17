<script lang="ts">
	import { browser } from '$app/environment';
	import CalendarDownload from '$lib/icons/CalendarDownload.svelte';
	import CalendarFuture from '$lib/icons/CalendarFuture.svelte';
	import CalendarPast from '$lib/icons/CalendarPast.svelte';
	import ical, { ICalCalendarMethod } from 'ical-generator';
	import { eventDetails } from '../ical';

	let { date: dateString }: { date: string } = $props();

	const calendar = ical({ name: 'Bi und Pan Treff in der a.cat' });
	calendar.method(ICalCalendarMethod.REQUEST);
	const startTime = new Date(dateString);
	startTime.setHours(19);
	const endTime = new Date(dateString);
	endTime.setHours(22);
	calendar.createEvent({ start: startTime, end: endTime, ...eventDetails });

	const blob = new Blob([calendar.toString()], { type: 'text/calendar' });
</script>

{#snippet date_label()}
	<span>
		{startTime.toLocaleString('de-DE', {
			weekday: 'short',
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit'
		})}
	</span>
{/snippet}

<article>
	{#if endTime.valueOf() < new Date().valueOf()}
		<s>
			<CalendarPast />
			{@render date_label()}
		</s>
	{:else}
		{#if browser}
			<a
				href={URL.createObjectURL(blob)}
				download="bi-pan-treff-a.cat-{dateString}.ics"
				title="Diesen Termine als as .ical Datei herunterladen"
			>
				<CalendarDownload />
			</a>
		{:else}
			<CalendarFuture />
		{/if}
		{@render date_label()}
	{/if}
</article>

<style>
	article {
		margin-block: 0.5rem;
	}

	article,
	s {
		display: flex;
		align-items: center;
		min-height: var(--link-height);
		font-variant-numeric: tabular-nums;
		gap: 0.5rem;
	}

	s {
		opacity: 0.6;
	}

	a {
		min-height: var(--link-height);
		display: inline-flex;
		align-items: center;
	}
</style>
