/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

const languages = ["en", "pl", "de"]

exports.createPages = async ({ actions: { createPage, createRedirect } }) => {
  const createI18nPage = page => {
    languages.forEach(language => {
      createPage({
        ...page,
        path: `/${language}${page.path}`,
        context: {
          ...page.context,
          language,
          languages: languages.map(alternativeLanguage => ({
            language: alternativeLanguage,
            path: `/${alternativeLanguage}${page.path}`,
          })),
        },
      })
    })
  }

  createI18nPage({
    path: "/",
    component: path.resolve(`src/templates/Home.js`),
  })

  languages.forEach(language =>
    createRedirect({
      fromPath: "/",
      toPath: `/${language}`,
      Language: language,
    })
  )
  createRedirect({ fromPath: "/", toPath: "/en" })
}

exports.createResolvers = ({ createResolvers }) => {
  const languageResolver = (source, args, context) => {
    const language = args.language || context.language
    return source[language] || source["en"]
  }

  createResolvers({
    SanityLocaleString: {
      t: {
        type: `String!`,
        args: { language: { type: "String" } },
        resolve: languageResolver,
      },
    },
    SanityLocaleText: {
      t: {
        type: `String!`,
        args: { language: { type: "String" } },
        resolve: languageResolver,
      },
    },
  })
}
