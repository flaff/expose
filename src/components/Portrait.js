import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "emma-paillex-Vpgeq2S3IE8-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden'}}>
      <Img fluid={data.image.childImageSharp.fluid} />
    </div>
  )
}

export default Portrait
