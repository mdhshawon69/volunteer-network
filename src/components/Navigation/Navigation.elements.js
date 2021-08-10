import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  @media screen and (max-width: 768px) {
    height: 40px;
    margin-left: -22px;
  }
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #eee;
    color: #fff;
  }
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

  &:hover {
    color: #3f90fc;
    transition: 0.2s ease all;
  }
`;

export const ButtonReg = styled(Link)`
  text-decoration: none;
  padding: 0.8rem;
  width: 7rem;
  color: #fff;
  text-transform: capitalize;
  background-color: #3f90fc;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 17px 10px 10px 0;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
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

export const MoblileIconOpen = styled(FaBars)`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MoblileIconClose = styled(FaTimes)`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
