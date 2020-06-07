import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/AboutSection"
import AllProjects from "../components/AllProjects"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <AboutSection />
        <AllProjects />
      </Layout>
    </>
  )
}

export default IndexPage
