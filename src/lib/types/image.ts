export type image = {
	img: {
		src: string;
		w: number;
		h: number;
	};
	sources: {
		avif: [
			{
				src: string;
				w: number;
			}
		];
		webp: {
			src: string;
			w: number;
		};
	};
};
