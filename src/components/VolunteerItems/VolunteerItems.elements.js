import styled from 'styled-components';

export const ItemsMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  margin-top: -100px;

  @media screen and (max-width: 768px) {
    width: 55%;
    margin: auto;
    margin-top: -100px;
  }
`;
