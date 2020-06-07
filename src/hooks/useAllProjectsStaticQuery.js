import { graphql, useStaticQuery } from "gatsby"

const allProjectsQuery = graphql`
  query AllProjects {
    projects: allSanityProject {
      nodes {
        ...ProjectView
        artPieces {
          ...ArtPiece
        }
      }
    }
  }
`

const useAllProjectsStaticQuery = () => {
  return useStaticQuery(allProjectsQuery)
}

export default useAllProjectsStaticQuery
