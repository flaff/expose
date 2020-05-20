import React, { useCallback } from "react"
import { styled } from "linaria/react"
import { navigate } from "gatsby"

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
  const goToExperience = useCallback(() => navigate('/experience'), []);

  return (
    <AboutSectionWrapper>
      <h1>About me</h1>
      {lorem}
      <div>
        <Button onClick={goToExperience}>See my exhibitions and experience</Button>
      </div>
    </AboutSectionWrapper>
  )
}

export default About
