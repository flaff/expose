import React from "react"
import { styled } from "linaria/react"
import { navigate } from "gatsby"
import { Button } from "react-bootstrap"
import Section from "./basic/Section"
import { useSimpleTranslation } from "../context/TranslationProvider"

const ShortDescription = styled.p`
  margin-bottom: 1.5rem;
`

const Centerer = styled.div`
  text-align: center;
`

const goToAbout = () => navigate("/about")

const AboutSection = ({ aboutMe }) => {
  const t = useSimpleTranslation();
  return (
    <Section>
      <h1>{t('aboutMe')}</h1>
      <ShortDescription>{t(aboutMe.shortDescription)}</ShortDescription>
      <Centerer>
        <Button onClick={goToAbout}>{t('seeMoreAboutMe')}</Button>
      </Centerer>
    </Section>
  )
}

export default AboutSection
