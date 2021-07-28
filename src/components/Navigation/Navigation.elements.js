import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoArea = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

export const MenuArea = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const MenuLink = styled(Link)`
  color: #000;
  text-transform: capitalize;
  font-size: 18px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const ButtonReg = styled(Link)`
  text-decoration: none;
  padding: 0.8rem;
  width: 7rem;
  color: #fff;
  text-transform: capitalize;
  background-color: #3f90fc;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 17px 10px 10px 0;
`;

export const ButtonAdmin = styled(Link)`
  text-decoration: none;
  padding: 0.8rem 0;
  width: 7rem;
  color: #fff;
  text-transform: capitalize;
  background-color: #434141;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
`;
