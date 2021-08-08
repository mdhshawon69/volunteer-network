/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
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
import { UserContext } from '../../App';
import { Avatar } from '@material-ui/core';

const Navigation = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
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
              <MenuLink to='/events'>events</MenuLink>
            </NavItem>
            <NavItem>
              <MenuLink to='/'>blog</MenuLink>
            </NavItem>
            <NavItem>
              <ButtonReg to='/register'>Register</ButtonReg>
            </NavItem>
            <NavItem>
              {loggedUser.email === 'mahmudulhaqshaown@gmail.com' ? (
                <ButtonAdmin to='/admin'>admin</ButtonAdmin>
              ) : null}
            </NavItem>
            <NavItem>
              {loggedUser.success ? (
                <Avatar
                  style={{ margin: '20px 10px 0' }}
                  alt='Remy Sharp'
                  src={loggedUser.image}
                />
              ) : null}
            </NavItem>
          </NavItems>
        </MenuArea>
      </Container>
    </NavBar>
  );
};

export default Navigation;
