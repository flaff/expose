import React, { useMemo, useCallback } from "react"
import { styled } from "linaria/react"
import Gallery from "react-photo-gallery"
import Img from "gatsby-image"
import PhotoWrapper from "./PhotoWrapper"

const GalleryMarginOffset = styled.div`
  margin: -20px 0;
`

const getThumbFluid = node => node.thumb?.fluid

const useGalleryPhotos = ({ images }) => {
  const photoNodes = useMemo(
    () => images.edges.map(edge => edge.node).filter(getThumbFluid),
    [images]
  )

  const photos = useMemo(
    () =>
      photoNodes.map(image => ({
        src: getThumbFluid(image).src,
        width: getThumbFluid(image).aspectRatio,
        height: 1,
      })),
    [photoNodes]
  )

  console.log(photoNodes, photos)

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

  return (
    <GalleryMarginOffset>
      <Gallery
        renderImage={imageRenderer}
        photos={photos}
        direction="column"
        margin={20}
      />
    </GalleryMarginOffset>
  )
}

export default LazyGallery
