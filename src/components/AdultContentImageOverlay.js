import { useAdultContent } from "../context/AdultContentContext"
import { ShowAdultContentButton } from "./ShowAdultContentButton"
import { styled } from "linaria/lib/react"
import React from "react"

const Overlay = styled.div`
  position: absolute !important;
  background: rgba(255,255,255,0.3);
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`

export function AdultContentImageOverlay() {
  const { adultContentVisible } = useAdultContent()

  if (adultContentVisible) {
    return null
  }

  return (
    <Overlay>
      <ShowAdultContentButton />
    </Overlay>
  )
}
