import React from "react"
import styled from "styled-components"
import YAMLData from "../content/experience.yaml"
import StyledSection from "./styles/StyledSection"
import {StyledH3, StyledH4} from './styles/StyledHeadings'
import Heading from "./Heading"


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Job = ({ job }) => (
  <>
    <FlexContainer>
      <StyledH3>{job.role}</StyledH3>
      <p className="orange">{job.timeline}</p>
    </FlexContainer>

    <StyledH4>{job.company}</StyledH4>

    <p>{job.description}</p>
  </>
)

const Experience = () => {
  return (
    <StyledSection id="experience">
      <Heading title="Experience" />
      {YAMLData.content.map((data, index) => {
        return <Job job={data.job} key={`job-${index}`}></Job>
      })}
    </StyledSection>
  )
}

export default Experience
