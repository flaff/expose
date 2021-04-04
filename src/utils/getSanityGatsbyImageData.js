import { getGatsbyImageData } from "gatsby-source-sanity"

const SANITY_CONFIG = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
}

const DEFAULT_OPTIONS = {
  placeholder: 'blurred'
}

const getSanityGatsbyImageData = (image, options) => {
return getGatsbyImageData(image, { ...DEFAULT_OPTIONS, ...options }, SANITY_CONFIG)
}

export default getSanityGatsbyImageData
