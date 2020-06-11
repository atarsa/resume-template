import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { theme } from "../styles/theme"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// components
import Header from "../components/Header"
// Load typeface
require("@openfonts/saira-semi-condensed_latin")
require("typeface-open-sans")

library.add(fab, faBars)
const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
  }
  body{
    font-family: 'Open Sans', sans-serif;
    /* happy rems  😄 */
    font-size: 16px; /* px fallback */
    font-size: 1.6rem; /* default font-size for document */
    line-height: 1.5; /* a nice line-height */
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Saira Semi Condensed', sans-serif
  }

  *, *::before, *::after{
    box-sizing: border-box;
  } 
`
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    grid-template-columns: 25rem 1fr;
  }
`
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />

    <StyledWrapper>
      <Header siteTitle="Jane Doe" />
      <main>{children}</main>
    </StyledWrapper>
  </ThemeProvider>
)

export default Layout
