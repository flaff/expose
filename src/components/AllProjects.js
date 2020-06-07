import React from "react"
import Project from './Project'
import useAllProjectsStaticQuery from "../hooks/useAllProjectsStaticQuery"

const AllProjects = () => {
  const { projects } = useAllProjectsStaticQuery();

  return (
    projects.nodes.map(project => <Project project={project} />)
  )
}


export default AllProjects;
