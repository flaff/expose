import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "linaria/lib/react"
import React, { useMemo } from "react"
import { useSimpleTranslation } from "../context/TranslationProvider"
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

  const imageElements = useMemo(
    () =>
      artPieces.map(({ image, slug, title }) => {
        return (
          <MasonGridImageWrapper>
            <GatsbyImage
              image={getSanityGatsbyImageData(image, { width: 400 })}
              key={slug.current}
              alt={t(image.alt) || t(title)}
            />
          </MasonGridImageWrapper>
        )
      }),
    [artPieces, t]
  )

  return <MasonGrid>{imageElements}</MasonGrid>
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
