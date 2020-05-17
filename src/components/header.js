import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Portrait from "./Portrait"

const Header = ({ siteTitle }) => (
  <header
    style={{ margin: `1.45rem 0` }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Portrait />
      <h1 style={{ margin: "1rem 0 0 0"}}>Some Artist</h1>
      <caption>Doing ordinary art stuff</caption>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
