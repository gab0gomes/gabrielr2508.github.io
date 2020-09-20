require('dotenv').config();

const queries = require('./src/utils/algolia-queries');

module.exports = {
  siteMetadata: {
    title: `Gabriel Gomes`,
    description: `A blog about my thoughts, front-end, agile and more cool stuffs.`,
    author: `@gabrielr2508`,
    position: `Front-end Developer`,
    siteUrl: `https://gabrielr2508.github.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first because of gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
              {
                resolve: 'gatsby-remark-relative-images',
                options: {
                  name: 'uploads',
                },
              },
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 960,
                  linkImagesToOriginal: false,
                },
              },
              'gatsby-remark-lazy-load',
              'gatsby-remark-prismjs',
            ],
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gabriel Gomes`,
        short_name: `Gabriel Gomes`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/profile-photo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
