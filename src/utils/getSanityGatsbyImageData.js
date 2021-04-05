import { getGatsbyImageData } from "gatsby-source-sanity"

const SANITY_CONFIG = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
}

const DEFAULT_OPTIONS = {
  placeholder: "blurred",
}

function stringifyParams(params) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
}

function addQueryParams(url, params) {
  const queryParams = stringifyParams(params)
  return url.includes("?")
    ? url.replace("?", `?${queryParams}&`)
    : `${url}?${stringifyParams(params)}`
}

function modifyImages(imageProps, params) {
  imageProps.images.fallback.src = addQueryParams(
    imageProps.images.fallback.src,
    params
  )
  imageProps.images.fallback.srcSet = imageProps.images.fallback.srcSet
    .split(",")
    .map(srcSet => addQueryParams(srcSet, params))
    .join(",")
}

const getSanityGatsbyImageData = (image, options) => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options }
  const imageProps = getGatsbyImageData(image, mergedOptions, SANITY_CONFIG)

  if (mergedOptions.placeholder === "blurred") {
    imageProps.placeholder = { fallback: image.asset.metadata.lqip }
  }

  modifyImages(imageProps, { q: 50 })

  return imageProps
}

export default getSanityGatsbyImageData
