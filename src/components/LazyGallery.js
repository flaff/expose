import React, { useMemo, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Img from "gatsby-image"
import PhotoWrapper from "./PhotoWrapper"

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
    <div style={{ margin: "0 -20px" }}>
      <Gallery
        renderImage={imageRenderer}
        photos={photos}
        direction="column"
        margin={20}
      />
    </div>
  )
}

export default LazyGallery
