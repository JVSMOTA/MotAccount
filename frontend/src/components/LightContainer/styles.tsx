
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 0 0 30%;
  height: 66vh;
  max-height: 100vh;
  background-color: #FFFFFF;
  border-radius: 32px;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1158px) {
    min-width: fit-content;
    height: auto;
  }

`;
