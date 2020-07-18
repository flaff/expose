import React, { useCallback, useState } from "react"
import { graphql } from "gatsby"
import InfoCircle from "react-bootstrap-icons/dist/icons/info-circle"
import ArrowUp from "react-bootstrap-icons/dist/icons/arrow-up"
import Collapsible from "react-collapsible"
import { styled } from "linaria/react"
import { Button } from "react-bootstrap"
import Section from "./basic/Section"
import Spacing from "./basic/Spacing"
import LazyGallery from "./LazyGallery"
import { useSimpleTranslation } from "../context/TranslationProvider"

const ProjectHeader = styled(Spacing)`
  margin-bottom: 2rem;
`

const Description = styled.div`
  text-align: justify;
  padding-bottom: 2rem;
`

const ShowDetailsText = styled.span`
  opacity: 0;
  transition: opacity 200ms;
`

const DetailsButton = styled(Button)`
  border: none;
  margin-left: -0.375rem;

  &:hover,
  &:focus,
  &:active {
    ${ShowDetailsText} {
      opacity: 1;
    }
  }
`

const Project = ({ project, images }) => {
  const { title, description, artPieces } = project
  const [detailsVisible, setDetailsVisible] = useState(false)
  const t = useSimpleTranslation()

  const toggleDetails = useCallback(
    () => setDetailsVisible(visible => !visible),
    []
  )

  return (
    <Section>
      <ProjectHeader>
        <h1>{t(title)}</h1>
        {t(description) && (
          <DetailsButton variant="outline-primary" onClick={toggleDetails}>
            <Spacing>
              {detailsVisible ? (
                <>
                  <ArrowUp size="1.5rem" />
                  <span>{t("hideDescription")}</span>
                </>
              ) : (
                <>
                  <InfoCircle size="1.5rem" />
                  <ShowDetailsText>{t("showDescription")}</ShowDetailsText>
                </>
              )}
            </Spacing>
          </DetailsButton>
        )}
      </ProjectHeader>
      <Collapsible
        open={detailsVisible}
        easing="ease-in-out"
        transitionTime={200}
      >
        <Description>{t(description)}</Description>
      </Collapsible>

      <LazyGallery images={artPieces} />
    </Section>
  )
}

export const query = graphql`
  fragment ProjectView on SanityProject {
    title {
      t(language: $language)
    }
    slug {
      current
    }
    description {
      t(language: $language)
    }
  }
`

export default Project
