export type projectType = {
	slug: string;
	path: string;
	component: any;
	metadata: metadataType;
};

export type metadataType = {
	title: string;
	categories?: string[];
	tags?: string[];
	dateCreated?: Date;
	dateUpdated?: Date;
};
