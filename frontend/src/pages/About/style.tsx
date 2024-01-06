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
    min-width: fit-content;
  }
`;
