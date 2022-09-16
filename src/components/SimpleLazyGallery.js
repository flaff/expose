import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "linaria/lib/react"
import React, { useMemo } from "react"
import { useAdultContent } from "../context/AdultContentContext"
import { useSimpleTranslation } from "../context/TranslationProvider"
import getSanityGatsbyImageData from "../utils/getSanityGatsbyImageData"
import { AdultContentImageOverlay } from "./AdultContentImageOverlay"

const MasonGrid = styled.div`
  columns: 6 250px;
  column-gap: 40px;
`

const MasonGridImageWrapper = styled.div`
  display: inline-flex;
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  &,
  div[data-gatsby-image-wrapper],
  img {
    border-radius: 10px;
    overflow: hidden;
  }

  & > * {
    position: static;
  }
`

const SimpleLazyGallery = ({ artPieces }) => {
  const { t } = useSimpleTranslation()
  const { adultContentVisible } = useAdultContent()

  const imageElements = useMemo(
    () =>
      artPieces.map(({ image, slug, title, matureContent }) => {
        const gatsbyImageData = getSanityGatsbyImageData(image, { width: 400 })

        if (!gatsbyImageData) {
          return null
        }

        if (matureContent && !adultContentVisible) {
          console.log(gatsbyImageData)
          return (
            <MasonGridImageWrapper key={slug.current}>
              <AdultContentImageOverlay />
              <img
                src={gatsbyImageData.placeholder.fallback}
                width={gatsbyImageData.width}
                alt={t(image.alt) || t(title)}
              />
            </MasonGridImageWrapper>
          )
        }

        return (
          <MasonGridImageWrapper key={slug.current}>
            <GatsbyImage
              image={gatsbyImageData}
              alt={t(image.alt) || t(title)}
            />
          </MasonGridImageWrapper>
        )
      }),
    [artPieces, t, adultContentVisible]
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
