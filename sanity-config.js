module.exports = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID || "jwj9nglv",
  dataset: process.env.GATSBY_SANITY_DATASET || "production",
  token: process.env.SANITY_READ_TOKEN,
  watchMode: process.env.NODE_ENV !== 'production'
}
