import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  font-size: 6rem;
  margin: 4rem 0;
  color: ${props => props.theme.colors.black};
  letter-spacing: -0.05rem;
`

function Heading({ title }) {
  return <StyledH2>{title}</StyledH2>
}

export default Heading
