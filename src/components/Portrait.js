import React, { useMemo } from "react"
import { styled } from "linaria/react"
import { GatsbyImage } from "gatsby-plugin-image"
import getSanityGatsbyImageData from "../utils/getSanityGatsbyImageData"

const CircleWrapper = styled.div`
  &, div[data-gatsby-image-wrapper], img {
    border-radius: 120px;
    overflow: hidden;
    height: 60vh;
  }
`

const Portrait = ({ aboutMe }) => {
  const photoImage = useMemo(() => getSanityGatsbyImageData(aboutMe.photo), [aboutMe]);
  return (
    <CircleWrapper>
      <GatsbyImage image={photoImage} alt={aboutMe.photo.asset.alt} />
    </CircleWrapper>
  )
}

export default Portrait
