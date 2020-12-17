/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Riccardo's Limoncello`,
    description: `A simple website where to configure your limoncello...`,
    author: `Riccardo`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `G-LDL3J0DYMH`,
      },
    },
  ],
}
