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
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 32px;
  border-radius: 10px;
  overflow: hidden;

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
  const { adultContentVisible } = useAdultContent()

  const imageElements = useMemo(
    () =>
      artPieces.map(({ image, slug, title, matureContent }) => {
        const gatsbyImageData = getSanityGatsbyImageData(image, { width: 400 })

        if (!gatsbyImageData) {
          return null
        }

        if (matureContent && !adultContentVisible) {
          const blurredGatsbyImageData = {
            ...gatsbyImageData,
            images: {
              ...gatsbyImageData.images,
              fallback: gatsbyImageData.placeholder.fallback,
              sources: [],
            },
          }

          return (
            <MasonGridImageWrapper>
              <AdultContentImageOverlay />
              <GatsbyImage
                image={blurredGatsbyImageData}
                key={slug.current}
                alt={t(image.alt) || t(title)}
              />
            </MasonGridImageWrapper>
          )
        }

        return (
          <MasonGridImageWrapper>
            <GatsbyImage
              image={gatsbyImageData}
              key={slug.current}
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
