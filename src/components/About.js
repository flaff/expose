import React from "react"

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare augue non orci auctor, ut euismod arcu consectetur. Maecenas arcu risus, malesuada eget finibus vel, accumsan eu nulla. Cras scelerisque luctus sodales. Nam aliquet sem elit. Sed lobortis, eros ac auctor efficitur, risus augue elementum tortor, ac fermentum ex magna placerat ligula.",
  "Praesent ornare metus pulvinar, auctor leo sed, hendrerit ex. Integer non vestibulum lectus. Nullam est velit, aliquet sed urna eget, efficitur ultrices dolor. Donec imperdiet massa a ex dictum, et sodales dolor dapibus.",
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
          <div
      style={{
        // border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.1)",
        padding: "0.25em 0.75em",
        borderRadius: "10px",
        display: "inline-block",
        margin: "0 auto"
      }}
    >
      See my exhibitions and experience > 
    </div>
    </section>
  )
}

export default About
