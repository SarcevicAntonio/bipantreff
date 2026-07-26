export const formatDate = (date: string | Date): string =>
	new Date(date).toLocaleString('de-DE', {
		weekday: 'short',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit'
	});

export const event_details = {
	summary: `Bi und Pan Treff in der a.cat`,
	location: 'a.cat, Herwarthstraße 7, 48143 Münster',
	url: 'https://bipan.ms/',
	description: 'Beginn: 19:30'
};
