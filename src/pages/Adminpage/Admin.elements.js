import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AdminNav = styled.div`
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const AdminLogo = styled.img`
  height: 60px;
  width: auto;
  margin-left: 20px;
`;

export const Heading = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const MainBody = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSideBar = styled.div`
  width: 20%;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

export const SideLink = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const RightSideBar = styled.div`
  width: 80%;
  min-height: 640px;
  background-color: #eee;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const GridArea = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const AdminIcon = styled.div`
  height: 20px;
  width: auto;
`;
