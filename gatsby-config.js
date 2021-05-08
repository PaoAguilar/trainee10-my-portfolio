/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: './src/data/',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
