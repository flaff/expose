import React from "react"
import { styled } from "linaria/react"
import GlobeIcon from "react-bootstrap-icons/dist/icons/globe"
import ChevronCompactDownIcon from "react-bootstrap-icons/dist/icons/chevron-compact-down"
import Spacing from "../components/basic/Spacing"
import Portrait from "./Portrait"
import { usePageContext } from "../context/PageContextProvider"
import { Dropdown } from "react-bootstrap"
import { useSimpleTranslation } from "../context/TranslationProvider"
import "popper.js"

const ArtistNameHeader = styled.h1`
  font-size: 7vh;
  letter-spacing: 0;
  margin-bottom: 8px;
`

const PortraitText = styled.div`
  position: absolute;
  margin-bottom: 25vh;
  text-align: center;
  width: 300px;
`

const PortraitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopBar = styled.div`
  display: flex;
  padding: 16px;
  position: fixed;
  justify-content: end;
  width: 100%;
  z-index: 2;
`

const ChevronWrapper = styled.div`
  font-size: 18px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    line-height: 1;
  }

  svg {
    font-size: 32px;
    position: relative;
    animation: bottom 3s linear infinite;

    @keyframes bottom {
      40% {
        top: 0px;
      }
      50% {
        top: 5px;
      }
      55% {
        top: -1px;
      }
      60% {
        top: 0px;
      }
    }
  }
`

const LandingSplash = styled.div`
  height: 100vh;
  background: #340016;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
      <LandingSplash>
        <div style={{ height: "50px" }} />
        <PortraitWrapper>
          <Portrait aboutMe={aboutMe} />
          <PortraitText>
            <ArtistNameHeader>{aboutMe.fullName}</ArtistNameHeader>
            <div>{t(aboutMe.fewWordsAboutMe)}</div>
          </PortraitText>
        </PortraitWrapper>
        <ChevronWrapper>
          <div>{t("scrollDown")}</div>
          <ChevronCompactDownIcon />
        </ChevronWrapper>
      </LandingSplash>
    </>
  )
}

export default Header
