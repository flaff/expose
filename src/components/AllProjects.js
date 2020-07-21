import React from "react"
import Project from './Project'

const AllProjects = ({ projects }) => {
  return (
    projects.nodes.map(project => <Project project={project} key={project.slug.current} />)
  )
}


export default AllProjects;
