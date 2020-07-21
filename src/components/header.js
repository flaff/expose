import React from "react"
import { styled } from "linaria/react"
import GlobeIcon from "react-bootstrap-icons/dist/icons/globe"
import Spacing from "../components/basic/Spacing"
import Portrait from "./Portrait"
import { usePageContext } from "../context/PageContextProvider"
import { Dropdown } from "react-bootstrap"
import { useSimpleTranslation } from "../context/TranslationProvider"
import "popper.js"

const ArtistInfoWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.45rem;
`

const ArtistNameHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0.4rem;
`

const FlexCenterer = styled.div`
  display: flex;
  justify-content: center;
`

const TopBar = styled.div`
  display: flex;
  padding: 16px;
`

const languageCodeToName = {
  en: "English",
  de: "Deutsch",
  pl: "Polski",
}

const LanguageSwitch = () => {
  const { languages, language: currentLanguage } = usePageContext()

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark">
        <GlobeIcon /> {languageCodeToName[currentLanguage]}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map(({ language, path }) => (
          <Dropdown.Item
            href={path}
            key={language}
            active={language === currentLanguage}
          >
            {languageCodeToName[language]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

const Header = ({ aboutMe }) => {
  const { t } = useSimpleTranslation()
  return (
    <>
      <TopBar>
        <LanguageSwitch />
      </TopBar>
      <ArtistInfoWrapper>
        <Portrait aboutMe={aboutMe} />
        <ArtistNameHeader>{aboutMe.fullName}</ArtistNameHeader>
        <div>{t(aboutMe.fewWordsAboutMe)}</div>
      </ArtistInfoWrapper>

      <FlexCenterer>
        <Spacing>
          {aboutMe.email && (
            <a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a>
          )}
          {aboutMe.phone && <span>{aboutMe.phone}</span>}
        </Spacing>
      </FlexCenterer>
    </>
  )
}

export default Header
