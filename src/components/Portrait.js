import React from "react"
import { styled } from "linaria/react"
import Img from "gatsby-image"
import useAboutMeStaticQuery from "../hooks/useAboutMeStaticQuery"

const CircleWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`

const Portrait = () => {
  const { sanityAboutMe: aboutMe } = useAboutMeStaticQuery()

  return (
    <CircleWrapper>
      <Img fluid={aboutMe.photo.asset.fluid} alt={aboutMe.photo.asset.alt} />
    </CircleWrapper>
  )
}

export default Portrait
