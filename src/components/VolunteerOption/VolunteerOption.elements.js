import styled from 'styled-components';

export const MainArea = styled.div`
  width: 25%;
  height: 400px;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const OptionImage = styled.img`
  width: 300px;
  height: 80%;
  z-index: 1;
`;

export const OptionName = styled.div`
  height: 20%;
  margin: 0;
  width: 300px;
  background-color: orange;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  z-index: 9999;
`;
