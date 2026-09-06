import termine from '../../termine.txt?raw';
export const prerender = true;
function isTruthy<T>(value?: T | undefined | null | false | ''): value is T {
	return !!value;
}
export const load = () => {
	return {
		dates: termine
			.split('\n')
			.map((date) => date.trim())
			.filter(isTruthy)
			.map((date) => {
				const start = new Date(date);
				if (isNaN(start.valueOf())) return undefined;
				start.setHours(19);
				const end = new Date(date);
				end.setHours(22);
				return { string: date, start, end };
			})
			.filter(isTruthy)
			.filter((date) => date.end.valueOf() >= new Date().valueOf())
	};
};
