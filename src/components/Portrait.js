import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CircleWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`

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
    <CircleWrapper>
      <Img fluid={data.image.childImageSharp.fluid} />
    </CircleWrapper>
  )
}

export default Portrait
