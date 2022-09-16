/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import useSiteSettingsStaticQuery from "../hooks/useSiteSettingsStaticQuery"

function Seo({ description, lang, meta, title }) {
  const { site, sanitySite } = useSiteSettingsStaticQuery()

  const metaDescription = description || sanitySite.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${sanitySite.title}`}
      meta={[
        {
          name: `description`,
          content: sanitySite.description,
        },
        {
          property: `og:title`,
          content: sanitySite.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: sanitySite.title,
        },
        {
          name: `twitter:description`,
          content: sanitySite.description,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default Seo
