import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "linaria/lib/react"
import { useSimpleTranslation } from "../context/TranslationProvider";

const MasonGatsbyImageWrapper = styled.div`
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

const MasonGatsbyImage = (props) => (
  <MasonGatsbyImageWrapper>
    <GatsbyImage {...props} />
  </MasonGatsbyImageWrapper>
);

const MasonGrid = styled.div`
  columns: 6 250px;
  column-gap: 40px;
`

const SimpleLazyGallery = ({ artPieces }) => {
  const { t } = useSimpleTranslation();
  return (
    <MasonGrid>
      {artPieces.map(({ image, slug, title }) => (
        <MasonGatsbyImage image={image.asset.gatsbyImageData} key={slug.current} alt={t(image.alt) || t(title)} />
      ))}
    </MasonGrid>
  )
}

export default SimpleLazyGallery
