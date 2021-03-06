/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"

const Layout = ({ children, aboutMe }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.title} aboutMe={aboutMe} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer />
      </div>
    </>
  )
}

export default Layout
