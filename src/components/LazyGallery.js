import React, { useMemo, useCallback } from "react"
import { styled } from "linaria/react"
import Gallery from "react-photo-gallery"
import Img from "gatsby-image"
import PhotoWrapper from "./PhotoWrapper"

const GalleryMarginOffset = styled.div`
  margin: -20px;
`

const getThumbFluid = node => node.image.asset.fluid;

const useGalleryPhotos = ({ images }) => {
  const photoNodes = images || [];

  const photos = useMemo(
    () =>
      photoNodes.map(image => ({
        src: getThumbFluid(image).src,
        width: getThumbFluid(image).aspectRatio,
        height: 1,
      })),
    [photoNodes]
  )

  const srcToNodeMap = useMemo(() => {
    const map = {}
    photos.forEach(({ src }) => {
      map[src] = photoNodes.find(node => getThumbFluid(node).src === src)
    })
    return map
  }, [photos, photoNodes])

  const getNode = useCallback(key => srcToNodeMap[key], [srcToNodeMap])

  return {
    getNode,
    photos,
  }
}

const LazyGallery = ({ images }) => {
  const { photos, getNode } = useGalleryPhotos({ images })

  const imageRenderer = useCallback(
    galleryItem => {
      const node = getNode(galleryItem.photo.src)
      const fluid = getThumbFluid(node)

      return (
        <PhotoWrapper {...galleryItem}>
          <Img fluid={fluid} />
        </PhotoWrapper>
      )
    },
    [getNode]
  )

  return photos.length ? (
    <GalleryMarginOffset>
      <Gallery
        renderImage={imageRenderer}
        photos={photos}
        direction="column"
        margin={20}
      />
    </GalleryMarginOffset>
  ) : null
}

export const query = graphql`
  fragment ArtPiece on SanityArtPiece {
    slug {
      current
    }
    title {
      t
    }
    image {
      alt {
        t
      }
      asset {
        fluid(maxWidth: 256) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`

export default LazyGallery
