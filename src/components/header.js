import React from "react"
import { styled } from "linaria/react"
import Spacing from "../components/basic/Spacing"
import Portrait from "./Portrait"
import useAboutMeStaticQuery from "../hooks/useAboutMeStaticQuery"

const HeaderWrapper = styled.header`
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

const Header = () => {
  const { sanityAboutMe: aboutMe } = useAboutMeStaticQuery()

  return (
    <>
      <HeaderWrapper>
        <Portrait />
        <ArtistNameHeader>{aboutMe.fullName}</ArtistNameHeader>
        <div>{aboutMe.fewWordsAboutMe}</div>
      </HeaderWrapper>

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
