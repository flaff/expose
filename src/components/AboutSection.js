import React from "react"
import { styled } from "linaria/react"
import { Button } from "react-bootstrap"
import Section from "./basic/Section"
import { useSimpleTranslation } from "../context/TranslationProvider"

const ShortDescription = styled.p`
  margin-bottom: 1.5rem;
`

const AboutSection = ({ aboutMe }) => {
  const { t } = useSimpleTranslation();
  return (
    <Section>
      <h1>{t('aboutMe')}</h1>
      <ShortDescription>{t(aboutMe.shortDescription)}</ShortDescription>
      <Button href={`mailto:${aboutMe.email}`}>{t('contactMe')}</Button>
    </Section>
  )
}

export default AboutSection
