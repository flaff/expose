import React from "react"
import Portrait from "./Portrait"

const Header = () => (
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

export default Header
