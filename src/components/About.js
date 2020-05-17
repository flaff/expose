import React from "react"

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare augue non orci auctor, ut euismod arcu consectetur. Maecenas arcu risus, malesuada eget finibus vel, accumsan eu nulla. Cras scelerisque luctus sodales. Nam aliquet sem elit. Sed lobortis, eros ac auctor efficitur, risus augue elementum tortor, ac fermentum ex magna placerat ligula.",
]

const style = {
  textAlign: "justify",
}

const About = () => {
  return (
    <section style={style}>
      <h1>About me</h1>
      {lorem.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <div style={{ display: "flex"}}>
      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "0.5em 1em",
          borderRadius: "10px",
          display: "inline-block",
          margin: "0 auto"
        }}
      >
        See my exhibitions and experience
      </div>
      </div>
    </section>
  )
}

export default About
