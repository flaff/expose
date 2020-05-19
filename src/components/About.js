import React from "react"
import { styled } from "linaria/react"

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare augue non orci auctor, ut euismod arcu consectetur. Maecenas arcu risus, malesuada eget finibus vel, accumsan eu nulla. Cras scelerisque luctus sodales. Nam aliquet sem elit. Sed lobortis, eros ac auctor efficitur, risus augue elementum tortor, ac fermentum ex magna placerat ligula."

const AboutSectionWrapper = styled.div`
  text-align: justify;
`

const Button = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5em 1em;
  border-radius: 10px;
  display: inline-bloc;
`

const About = () => {
  return (
    <AboutSectionWrapper>
      <h1>About me</h1>
      {lorem}
      <div>
        <Button>See my exhibitions and experience</Button>
      </div>
    </AboutSectionWrapper>
  )
}

export default About
