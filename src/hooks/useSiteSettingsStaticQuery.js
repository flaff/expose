import { useStaticQuery, graphql } from "gatsby"

const useSiteSettingsStaticQuery = () => {
  return useStaticQuery(
    graphql`
      query($language: String) {
        site {
          siteMetadata {
            author
          }
        }
        sanitySite: sanitySiteSettings(
          _id:
           { regex: "/(drafts.|)siteSettings/" }
        ) {
          title
          description {
            t(language: $language)
          }
          keywords
        }
      }
    `
  )
}

export default useSiteSettingsStaticQuery
