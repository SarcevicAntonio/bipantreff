import rawTermine from '../../termine.txt?raw';
export const prerender = true;

export const load = () => {
	return {
		termine: rawTermine
			.replaceAll('- ', '')
			.split('\n')
			.map((t) => t.trim())
			.filter(Boolean)
	};
};
