import React from "react"
import YAMLData from "../content/education.yaml"
import StyledSection from "./styles/StyledSection"
import { StyledH3, StyledH4 } from "./styles/StyledHeadings"
import FlexContainer from "./styles/FlexContainer"
import Heading from "./Heading"

const School = ({ school }) => (
  <>
    <FlexContainer>
      <StyledH3>{school.name}</StyledH3>
      <p className="orange">{school.timeline}</p>
    </FlexContainer>

    <StyledH4>{school.degree}</StyledH4>

    <p>{school.description}</p>
  </>
)

const Education = () => {
  return (
    <StyledSection id="education">
      <Heading title="Education" />
      {YAMLData.content.map((data, index) => {
        return <School school={data.school} key={`school-${index}`} />
      })}
    </StyledSection>
  )
}

export default Education
