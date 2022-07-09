require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Raphael Bourassa`,
    siteUrl: `https://rbourassa.ca`
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": process.env.googleTrackingId
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: process.env.apiUrl,
        auth: {
          token: process.env.apiKey,
        },
      },
    }]
};