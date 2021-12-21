import styled from 'styled-components';

export const ItemsMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -100px;

  @media screen and (max-width: 768px) {
    width: auto;
    justify-content: center;
    margin-top: -100px;
  }
`;
