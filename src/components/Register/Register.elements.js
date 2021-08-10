import styled from 'styled-components';

export const RegisterLogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const RegisterLogo = styled.img`
  height: 80px;
  width: auto;
`;

export const RegisterArea = styled.div`
  height: 400px;
  width: 500px;
  background-color: #fff;
  margin: auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 400px) {
    height: 200px;
    width: 350px;
  }
`;

export const RegisterButton = styled.button`
  width: 400px;
  height: 50px;
  padding: 0 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  border-radius: 50px;
  font-weight: 500;
  margin: 25px 0 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 400px) {
    width: 330px;
  }
`;

export const RegisterMessage = styled.div`
  width: 470px;
  height: 50px;
  font-size: 18px;
  display: ${({ performed }) => (performed ? 'flex' : 'none')};
  background-color: ${({ performed }) => (performed ? '#4BB543' : '#FF9494')};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  top: 15px;
  color: #fff;
`;
