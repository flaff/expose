import React from "react"
import { styled } from "linaria/react"
import Portrait from "./Portrait"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.45rem;
`;

const ArtistNameHeader = styled.h1`
  margin-top: 1rem;
`;

const Header = () => (
  <HeaderWrapper>
    <Portrait />
    <ArtistNameHeader>Some Artist</ArtistNameHeader>
    <div>Doing ordinary art stuff</div>
  </HeaderWrapper>
)

export default Header
