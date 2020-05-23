module.exports = {
  siteMetadata: {
    title: `Expose`,
    description: `A simple portfolio.`,
    author: `Michal Cziomer, flaff`,
  },
  pathPrefix: `/expose`,
  plugins: [
    // `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Inter`,
              subsets: [`latin-ext`],
              variants: [`400`, `700`],
              fontDisplay: 'swap'
            },
          ],
        },
      },
    },
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
        name: `Expose`,
        short_name: `expose`,
        start_url: `/`,
        background_color: `#14141E`,
        theme_color: `#14141E`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        ignore: [".linaria.css"],
        purgeOnly: ["bootstrap/"],
        whitelistPatterns: [/^btn/, /^form/, /^custom/],
      },
    },
  ],
}
