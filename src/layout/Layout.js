import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after{
    box-sizing: border-box;
  }
`
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};
`
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </ThemeProvider>
)

export default Layout
