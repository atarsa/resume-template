import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  font-family: "Saira Semi Condensed", sans-serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: ${props => props.theme.font.bold};
  letter-spacing: 0.07rem;
  padding: 0.5rem 0;
  color: ${props => props.theme.colors.light};
`

const Navigation = () => (
  <>
    <StyledLink to="#about">About</StyledLink>
    <StyledLink to="#experience">Experience</StyledLink>
    <StyledLink to="#education">Education</StyledLink>
    <StyledLink to="#skills">Skills</StyledLink>
    <StyledLink to="#interests">Interests</StyledLink>
    <StyledLink to="#awards">Awards</StyledLink>
  </>
)

export default Navigation
