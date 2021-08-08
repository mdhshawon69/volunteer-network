import styled from 'styled-components';
import img from '../../images/banner.jpg';

export const Main = styled.div`
  padding: 200px 0;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url(${img});
  background-position: center;
  background-size: cover;
  z-index: 9999;
  margin-top: -80px;
`;

export const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 35px;
  margin-bottom: 30px;
  text-align: center;
`;

export const SearchForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SearchInput = styled.input`
  padding: 1rem 1rem;
  width: 20rem;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 6px 0 0 6px;
  background-color: #f9f9f9;
`;

export const ButtonSearch = styled.input`
  padding: 1.05rem;
  width: 7rem;
  color: #fff;
  text-transform: capitalize;
  background-color: #3f90fc;
  border: 0;
  border-radius: 0 6px 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
