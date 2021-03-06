import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";
import { AccountConsumer } from "../providers/AccountProvider";
import Background from '../images/grey.png'

const Navbar = () => (
  <AccountConsumer>
    { value => (
    <StyledMenu>
      <NavLink to="/">
        <StyledItem>Home</StyledItem>
      </NavLink>
      <NavLink to="/about">
        <StyledItem>About</StyledItem>
      </NavLink>
      <NavLink to="/account/profile">
        <StyledItem>
          {value.firstName}
        </StyledItem>
      </NavLink>
    </StyledMenu>
    )}
  </AccountConsumer>
);

const StyledMenu = styled(Menu)`
  border-radius: 0 !important;
  padding: 1em;
  background-image: url(${Background}) !important ;
  margin-bottom: 2em !important;
`;
const StyledItem = styled(Menu.Item)`
  color: #f2f2f2 !important;
  transition: background 0.5s ease;
  cursor: pointer;
  font-family: "Asul", sans-serif !important;
  font-size: 1.4em !important;


  &:hover {
    background-color: #595959 !important;
    border-radius: 4px;
    transition: background 0.5s ease;
  }
`;

export default Navbar;
