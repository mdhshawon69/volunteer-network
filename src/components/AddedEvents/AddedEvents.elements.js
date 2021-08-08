import styled from 'styled-components';

export const EventsBody = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
    margin-top: 30px;
  }
`;
