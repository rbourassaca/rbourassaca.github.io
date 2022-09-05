export type ProjectType = {
	id: string;
	slug: string;
	title: string;
	status: string;
	oEmbed: string;
	content: string;
	date_created: string;
	gallery: {
		directus_files_id: {
			id: string;
		};
	};
	categories: [
		{
			categories_id: {
				id: string;
				title: string;
				color: string;
			};
		}
	];
	tags: [
		{
			tags_id: {
				id: string;
				title: string;
				color: string;
			};
		}
	];
};
