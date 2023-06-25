export type projectType = {
	slug: string;
	path: string;
	component: ConstructorOfATypedSvelteComponent;
	metadata: metadataType;
};

export type metadataType = {
	title: string;
	categories: categoryType[];
	tags: tagType[];
	dateCreated: Date;
	dateUpdated: Date | undefined;
};

export type categoryType = { name: string; icon: string };
export type tagType = { name: string; colorHex: `#${string}` };
