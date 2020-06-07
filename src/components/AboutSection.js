import React from "react"
import { styled } from "linaria/react"
import { navigate } from "gatsby"
import { Button } from "react-bootstrap"
import Section from "./basic/Section"
import useAboutMeStaticQuery from "../hooks/useAboutMeStaticQuery"

const ShortDescription = styled.p`
  text-align: justify;
  margin-bottom: 1.5rem;
`

const Centerer = styled.div`
  text-align: center;
`

const goToAbout = () => navigate("/about")

const AboutSection = () => {
  const { sanityAboutMe: aboutMe } = useAboutMeStaticQuery()

  return (
    <Section>
      <h1>About me</h1>
      <ShortDescription>{aboutMe.shortDescription}</ShortDescription>
      <Centerer>
        <Button onClick={goToAbout}>See my exhibitions and experience</Button>
      </Centerer>
    </Section>
  )
}

export default AboutSection
