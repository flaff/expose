require('dotenv').config()
module.exports.siteMetadata = {
  title: `Expose`,
  description: `A simple portfolio.`,
  author: `Michal Cziomer, flaff`,
}
module.exports.pathPrefix = `/expose`
module.exports.plugins = [
  // `gatsby-plugin-no-sourcemaps`,
  `gatsby-plugin-linaria`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: "gatsby-source-sanity",
    options: require("./sanity-config"),
  },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: `Inter`,
            subsets: [`latin-ext`],
            variants: [`400`],
            fontDisplay: "swap",
          },
          {
            family: `Manrope`,
            subsets: [`latin-ext`],
            variants: [`800`],
            fontDisplay: "swap",
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
  `gatsby-plugin-image`,
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
      icon: `src/images/gatsby-icon.png`,
    },
  },
  // {
  //   resolve: `gatsby-plugin-purgecss`,
  //   options: {
  //     printRejected: true,
  //     develop: true,
  //     ignore: [".linaria.css"],
  //     purgeOnly: ["bootstrap/"],
  //     whitelistPatterns: [/^btn/, /^form/, /^dropdown/, /^custom/, /^svg/, /show/],
  //   },
  // },
  `gatsby-plugin-netlify`
]
