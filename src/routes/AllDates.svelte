<script lang="ts">
	import CalendarDownload from '$lib/icons/CalendarDownload.svelte';
	import ical, { ICalCalendarMethod } from 'ical-generator';
	import { eventDetails } from '../ical';

	let { dates }: { dates: string[] } = $props();

	const calendar = ical({ name: 'Bi und Pan Treff in der a.cat' });
	calendar.method(ICalCalendarMethod.REQUEST);

	for (const dateString of dates) {
		const startTime = new Date(dateString);
		startTime.setHours(19);
		const endTime = new Date(dateString);
		endTime.setHours(22);
		calendar.createEvent({ start: startTime, end: endTime, ...eventDetails });
	}

	const blob = new Blob([calendar.toString()], { type: 'text/calendar' });
</script>

<a href={URL.createObjectURL(blob)} download="bi-pan-treff-a.cat-till-{dates.at(-1)}.ics">
	<CalendarDownload />
	Alle bestätigten Termine als .ical Datei herunterladen
</a>

<style>
	a {
		min-height: var(--link-height);
	}
</style>
