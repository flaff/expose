import { getGatsbyImageData } from "gatsby-source-sanity"

const SANITY_CONFIG = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
}

const DEFAULT_OPTIONS = {
  placeholder: "blurred",
}

const getSanityGatsbyImageData = (image, options) => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const imageProps = getGatsbyImageData(
    image,
    mergedOptions,
    SANITY_CONFIG
  );

  if (mergedOptions.placeholder === 'blurred') {
    imageProps.placeholder = { fallback: image.asset.metadata.lqip }
  }
  
  return imageProps;
}

export default getSanityGatsbyImageData
