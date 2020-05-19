import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyGallery from "../components/LazyGallery"
import About from "../components/About"

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
          <div className="mobile-flex-column" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
          <span style={{ margin: '0 20px'}}>
            some@artist.com
            </span>
            <div className="mobile-only" />
          <span style={{ margin: '0 20px'}}>+48 111 222 333</span>
          </div>
        <About />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.45rem",
          }}
        >
          <h1 style={{ margin: "0" }}>Some project</h1>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "0.25em 0.75em",
              borderRadius: "10px",
            }}
          >
            See other projects ➡
          </div>
        </div>
        <LazyGallery images={data.images} />
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
