import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "linaria/lib/react"
import { useSimpleTranslation } from "../context/TranslationProvider"
import { graphql } from "gatsby"
import getSanityGatsbyImageData from "../utils/getSanityGatsbyImageData"

const MasonGrid = styled.div`
  columns: 6 250px;
  column-gap: 40px;
`

const MasonGridImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  & > * {
    position: static;
  }

  img {
    border-radius: 10px;
    overflow: hidden;
  }
`

const SimpleLazyGallery = ({ artPieces }) => {
  const { t } = useSimpleTranslation()
  return (
    <MasonGrid>
      {artPieces.map(({ image, slug, title }) => {
        return (
          <MasonGridImageWrapper>
            <GatsbyImage
              image={getSanityGatsbyImageData(image)}
              key={slug.current}
              alt={t(image.alt) || t(title)}
            />
          </MasonGridImageWrapper>
        )
      })}
    </MasonGrid>
  )
}

export const query = graphql`
  fragment GatsbySanityImageAsset on SanityImageAsset {
    _id
    url
    size
    assetId
    extension
    metadata {
      dimensions {
        aspectRatio
      }
      lqip
    }
  }
`

export default SimpleLazyGallery
