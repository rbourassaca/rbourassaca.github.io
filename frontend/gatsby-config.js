require("dotenv").config({ path: `.env.${process.env.NODE_ENV}`})
module.exports = {
  siteMetadata: {
    title: `Portfolio de Raphael Bourassa`,
    description: `Raphael Bourassa, travailleur autonome dans la région des Laurentides oeuvrant dans le domaine du multimédia dont l’audio, le vidéo et le web.`,
    author: `Raphael Bourassa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio de Raphael Bourassa`,
        short_name: `Raphael Bourassa`,
        start_url: `/`,
        background_color: `#161619`,
        theme_color: `#222327`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        collectionTypes: ['menus', 'pages', 'projects', 'project-categories'],
        singleTypes: ['frontend-settings'],
        loginData: {
          identifier: process.env.API_IDENTIFIER,
          password: process.env.API_PASSWORD,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.NODE_ENV === `production` &&
          process.env.GOOGLE_ANALYTICS_ID,
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
