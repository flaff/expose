import { useStaticQuery, graphql } from "gatsby"

const useAboutMeStaticQuery = () => {
  return useStaticQuery(
    graphql`
      query {
        sanityAboutMe {
          fullName
          photo {      
            alt
            asset {
              fluid(maxWidth: 256) {
                ...GatsbySanityImageFluid
              }
            }
          }
          fewWordsAboutMe
          email
          phone
          shortDescription
        }
      }
    `
  )
}

export default useAboutMeStaticQuery
