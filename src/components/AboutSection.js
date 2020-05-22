import React from "react"
import { styled } from "linaria/react"
import { navigate } from "gatsby"
import { Button } from "react-bootstrap"
import Section from "./basic/Section"

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare augue non orci auctor, ut euismod arcu consectetur. Maecenas arcu risus, malesuada eget finibus vel, accumsan eu nulla. Cras scelerisque luctus sodales. Nam aliquet sem elit. Sed lobortis, eros ac auctor efficitur, risus augue elementum tortor, ac fermentum ex magna placerat ligula."

const JustifyText = styled.p`
  text-align: justify;
`

const Centerer = styled.div`
  text-align: center;
`

const goToAbout = () => navigate("/about")

const AboutSection = () => {
  return (
    <Section>
      <h1>About me</h1>
      <JustifyText>{lorem}</JustifyText>
      <Centerer>
        <Button onClick={goToAbout}>See my exhibitions and experience</Button>
      </Centerer>
    </Section>
  )
}

export default AboutSection
