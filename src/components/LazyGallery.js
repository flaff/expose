import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { styled } from "linaria/react"
import React, { useCallback, useMemo } from "react"
import Gallery from "react-photo-gallery"
import PhotoWrapper from "./PhotoWrapper"

const GalleryMarginOffset = styled.div`
  margin: -20px;
`

const getThumbImageData = node => getGatsbyImageData(node.image.asset)

const useGalleryPhotos = ({ images }) => {
  const photoNodes = images || []

  const photos = useMemo(
    () =>
      photoNodes.map(image => ({
        src: getThumbImageData(image).src,
        width: getThumbImageData(image).aspectRatio,
        height: 1,
      })),
    [photoNodes]
  )

  const srcToNodeMap = useMemo(() => {
    const map = {}
    photos.forEach(({ src }) => {
      map[src] = photoNodes.find(node => getThumbImageData(node).src === src)
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
      const gatsbyImageData = getThumbImageData(node)

      return (
        <PhotoWrapper {...galleryItem}>
          <GatsbyImage image={gatsbyImageData} />
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

export default LazyGallery
