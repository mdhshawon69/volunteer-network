import React from 'react';
import logo from '../../logos/Group 1329.png';
import {
  NavBar,
  LogoArea,
  MenuArea,
  MenuLink,
  Logo,
  NavItem,
  NavItems,
  ButtonReg,
  ButtonAdmin,
} from './Navigation.elements';
import { Container } from '../../GlobalStyles';

const Navigation = () => {
  return (
    <NavBar>
      <Container>
        <LogoArea to='/'>
          <Logo src={logo} />
        </LogoArea>
        <MenuArea>
          <NavItems>
            <NavItem>
              <MenuLink to='/'>home</MenuLink>
            </NavItem>
            <NavItem>
              <MenuLink to='/'>dontaion</MenuLink>
            </NavItem>
            <NavItem>
              <MenuLink to='/'>events</MenuLink>
            </NavItem>
            <NavItem>
              <MenuLink to='/'>blog</MenuLink>
            </NavItem>
            <NavItem>
              <ButtonReg to='/'>register</ButtonReg>
            </NavItem>
            <NavItem>
              <ButtonAdmin to='/admin'>admin</ButtonAdmin>
            </NavItem>
          </NavItems>
        </MenuArea>
      </Container>
    </NavBar>
  );
};

export default Navigation;
