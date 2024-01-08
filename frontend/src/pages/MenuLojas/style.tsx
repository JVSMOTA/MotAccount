import styled from 'styled-components'

export const WhiteContainer = styled.div`
  display: flex;
  min-width: 30rem;
  width: 30%;
  height: 18rem;
  margin: 5%;
  align-self: center;
  background-color: #FFFFFF;
  border-radius: 32px;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1158px) {
    min-width: 90%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #DB5807;
`;

export const P = styled.p`
  text-align: justify;
  color: #DB5807; 
  font-size: medium;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
`;

