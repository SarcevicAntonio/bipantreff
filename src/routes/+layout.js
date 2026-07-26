import termine from '../../termine.txt?raw';
export const prerender = true;

export const load = () => {
	return {
		dates: termine
			.split('\n')
			.map((date) => date.trim())
			.filter(Boolean)
			.map((date) => {
				const start = new Date(date);
				start.setHours(19);
				const end = new Date(date);
				end.setHours(22);
				return { string: date, start, end };
			})
	};
};
