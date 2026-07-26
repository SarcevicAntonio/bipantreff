<script lang="ts">
	import { browser } from '$app/environment';
	import CalendarDownload from '$lib/icons/CalendarDownload.svelte';
	import ical, { ICalCalendarMethod } from 'ical-generator';
	import { eventDetails } from '../ical';
	import type { PageData } from './$types';

	let { dates }: { dates: PageData['dates'] } = $props();

	const calendar = ical({ name: 'Bi und Pan Treff in der a.cat' });
	calendar.method(ICalCalendarMethod.REQUEST);
	for (const date of dates) calendar.createEvent({ ...date, ...eventDetails });
	const blob = new Blob([calendar.toString()], { type: 'text/calendar' });
</script>

{#if dates.length && browser}
	<a
		href={URL.createObjectURL(blob)}
		download="bi-pan-treff-a.cat-(bis-{dates.at(-1)?.string}).ics"
	>
		<CalendarDownload />
		Alle bestätigten Termine als <code>.ical</code>
	</a>
{/if}

<style>
	a {
		min-height: var(--link-height);
	}
</style>
