module.exports = {
	siteMetadata: {
		title: `Raphael Bourassa`,
		siteUrl: `https://rbourassa.ca`,
	},
	plugins: [
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".mdx", ".md"]
			}
		},
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-141806665-1",
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "./src/content/images/icon.png",
			},
		},
		{
			resolve: "gatsby-plugin-sharp",
			options: {
				defaults: {
					placeholder: "blurred",
				},
			},
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "settings",
				path: "./src/content/settings",
			},
			__key: "settings",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/content/images",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "projects",
				path: "./src/content/projects",
			},
			__key: "projects",
		},
	],
};
