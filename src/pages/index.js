import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/AboutSection"
import Spacing from "../components/basic/Spacing"
import Project from "../components/Project"

const project = {
  title: "Some project",
  description:
    "Aliquam in risus ut nunc cursus ultricies. Donec dolor tellus, viverra non sodales at, vestibulum mattis nunc. Nulla facilisi. Donec sit amet elit semper, tempor quam eu, aliquam orci. Donec lacus mi, rhoncus ac dolor id, fringilla fermentum orci. Aenean in mollis lectus. In et viverra lorem. Sed vel lacinia felis. Donec at ligula dictum, ullamcorper erat eget, ultricies ipsum.",
}

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Spacing>
          <span>some@artist.com</span>
          <div className="mobile-only" />
          <span>+48 111 222 333</span>
        </Spacing>
        <AboutSection open={true} />
        <Project {...project} images={data.images} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ExampleGalleryImages {
    images: allFile(
      filter: { relativeDirectory: { eq: "example-gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id

          thumb: childImageSharp {
            fluid(maxWidth: 256, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }

          full: childImageSharp {
            fluid(
              maxWidth: 1024
              quality: 85
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
