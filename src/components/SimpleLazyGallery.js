import React from "react"
import Img from "gatsby-image"
import { styled } from "linaria/lib/react"
import { useSimpleTranslation } from "../context/TranslationProvider";

const MasonImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 32px;

  * > {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

const MasonImg = (props) => (
  <MasonImgWrapper>
    <Img {...props} />
  </MasonImgWrapper>
);

const MasonGrid = styled.div`
  columns: 6 250px;
  column-gap: 40px;
`

const SimpleLazyGallery = ({ artPieces }) => {
  const { t } = useSimpleTranslation();
  return (
    <MasonGrid>
      {artPieces.map(({ image, slug }) => (
        <MasonImg fluid={image.asset.fluid} key={slug.current} />
      ))}
    </MasonGrid>
  )
}

export default SimpleLazyGallery
