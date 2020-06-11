import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem 2rem;

  a {
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    position: sticky;
    left: 0;
    height: 100vh;
  }
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavWrapper = styled.nav`
  display: ${props => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  padding: 1rem 0;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: ${props => props.theme.font.regular};
`

const StyledBtn = styled.button`
  background: ${props => props.theme.primaryColor};
  font-size: 3rem;
  padding: 0.6rem 1.2rem;
  border: solid 1px ${props => props.theme.colors.light};
  border-radius: 3px;

  .fa-bars {
    color: ${props => props.theme.colors.light};
  }
`

const MenuBtn = props => (
  <StyledBtn>
    <FontAwesomeIcon icon="bars" />
  </StyledBtn>
)

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <FlexDiv>
      <StyledLink to="/">{siteTitle}</StyledLink>
      <MenuBtn />
    </FlexDiv>
    <NavWrapper>
      <Navigation />
    </NavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
