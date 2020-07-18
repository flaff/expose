import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/AboutSection"
import AllProjects from "../components/AllProjects"
import { SimpleTranslationProvider } from "../context/TranslationProvider"
import { PageContextProvider } from "../context/PageContextProvider"

const IndexPage = ({ data, pageContext }) => {
  const { projects, aboutMe, translations } = data

  return (
    <PageContextProvider pageContext={pageContext}>
      <SimpleTranslationProvider translationNodes={translations.nodes}>
        <SEO title="Home" />
        <Layout aboutMe={aboutMe}>
          <AboutSection aboutMe={aboutMe} />
          <AllProjects projects={projects} />
        </Layout>
      </SimpleTranslationProvider>
    </PageContextProvider>
  )
}

export const query = graphql`
  query($language: String) {
    translations: allSanityTranslation {
      nodes {
        key
        translation {
          t(language: $language)
        }
      }
    }
    projects: allSanityProject {
      nodes {
        title {
          t(language: $language)
        }
        slug {
          current
        }
        description {
          t(language: $language)
        }
        artPieces {
          slug {
            current
          }
          title {
            t(language: $language)
          }
          image {
            alt {
              t(language: $language)
            }
            asset {
              fluid(maxWidth: 256) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }

    aboutMe: sanityAboutMe {
      fullName
      photo {
        alt {
          t(language: $language)
        }
        asset {
          fluid(maxWidth: 256) {
            ...GatsbySanityImageFluid
          }
        }
      }
      fewWordsAboutMe {
        t(language: $language)
      }
      email
      phone
      shortDescription {
        t(language: $language)
      }
    }
  }
`

export default IndexPage
