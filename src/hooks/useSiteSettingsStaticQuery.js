import { useStaticQuery, graphql } from "gatsby"

const useSiteSettingsStaticQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
        sanitySite: sanitySiteSettings(
          _id: { regex: "/(drafts.|)siteSettings/" }
        ) {
          title
          description
          keywords
        }
      }
    `
  )
}

export default useSiteSettingsStaticQuery
