import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-size: 24px;
`;
const Logo = styled.div`
  width: 150px;
  height: 100%;
`;
const NavbarItem = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    color: #212328;
    background-color: white;
    cursor: pointer;
  }
`;
const NavarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
function Navbar() {
  return (
    <NavbarWrapper>
      <Logo>
        <img alt="LOGO" src="./logo_simple.png" style={{ height: "100%" }} />
      </Logo>
      <NavarRight>
        <NavbarItem>Guilde</NavbarItem>
        <NavbarItem>Rankings</NavbarItem>
      </NavarRight>
    </NavbarWrapper>
  );
}

export default Navbar;
