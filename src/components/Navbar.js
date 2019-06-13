import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from 'styled-components'

const Navbar = () => (
  <div>
  <StyledMenu>
    <NavLink to="/">
      <StyledItem>Home</StyledItem>
    </NavLink>
    <NavLink to="/account/profile">
    <StyledItem>
      {/* //todo username  */}
      Username
    </StyledItem>
    </NavLink>
  </StyledMenu>
  </div>
);



const StyledMenu = styled(Menu)`
  border-radius: 0 !important;
  padding: 1.3em;
  background-color: #8C8C8C !important ;
  margin-bottom: 1.5em !important;
`
const StyledItem = styled(Menu.Item)`
  color: #F2F2F2 !important;
  transition: background 0.5s ease;
  cursor: pointer;
  font-family: 'Asul', sans-serif !important;

  &:hover {
    background-color: #595959 !important;
    border-radius: 8px;
    transition: background 0.5s ease;
  }
`

export default Navbar;
