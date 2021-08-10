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
  MoblileIcon,
  MoblileIconOpen,
  MoblileIconClose,
} from './Navigation.elements';
import { Container } from '../../GlobalStyles';
import { UserContext } from '../../App';
import { Avatar } from '@material-ui/core';
import { useState } from 'react';

const Navigation = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [active, setActive] = useState(1);
  const [click, setClick] = useState(false);
  const isActive = {
    color: ' #3f90fc',
  };

  const handleClick = (clickSet, activeSet) => {
    setClick(clickSet);
    setActive(activeSet);
  };
  return (
    <NavBar>
      <Container>
        <LogoArea to='/'>
          <Logo src={logo} />
        </LogoArea>
        <MenuArea>
          <NavItems click={click}>
            <NavItem>
              <MenuLink
                to='/'
                style={active === 1 ? isActive : null}
                onClick={() => handleClick(!click, 1)}
              >
                home
              </MenuLink>
            </NavItem>
            <NavItem>
              <MenuLink
                to='#'
                style={active === 2 ? isActive : null}
                onClick={() => handleClick(!click, 2)}
              >
                dontaion
              </MenuLink>
            </NavItem>

            <NavItem>
              <MenuLink
                to='/events'
                style={active === 3 ? isActive : null}
                onClick={() => handleClick(!click, 3)}
              >
                events
              </MenuLink>
            </NavItem>

            <NavItem>
              <MenuLink
                to='#'
                style={active === 4 ? isActive : null}
                onClick={() => handleClick(!click, 4)}
              >
                blog
              </MenuLink>
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
          <span style={{ transition: '0.5s' }} onClick={() => setClick(!click)}>
            {click ? <MoblileIconClose /> : <MoblileIconOpen />}
          </span>
        </MenuArea>
      </Container>
    </NavBar>
  );
};

export default Navigation;
