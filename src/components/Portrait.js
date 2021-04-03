import React from "react"
import { styled } from "linaria/react"
import { GatsbyImage } from "gatsby-plugin-image"

const CircleWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`

const Portrait = ({ aboutMe }) => {
  return (
    <CircleWrapper>
      <GatsbyImage image={aboutMe.photo.asset.gatsbyImageData} alt={aboutMe.photo.asset.alt} />
    </CircleWrapper>
  )
}

export default Portrait
