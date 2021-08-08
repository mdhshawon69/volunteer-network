import styled from 'styled-components';

export const EventCard = styled.div`
  width: 450px;
  height: 200px;
  padding: 15px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${({ color }) => (color ? color : '#fff')};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 200px;
    margin-left: 10px;
  }
`;

export const EventImage = styled.img`
  height: 165px;
  width: 165px;
`;

export const EventCardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -75px;
  width: 300px;
  margin-left: 15px;
  color: #fff;
  height: 100px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CancelButton = styled.button`
  padding: 10px 30px;
  border: none;
  background-color: #eee;
  color: #999;
  border-radius: 4px;
  position: absolute;
  top: 75%;
  left: 75%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    left: 68%;
  }
`;
