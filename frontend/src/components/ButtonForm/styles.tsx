import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 6vh;
  align-items: center;
  justify-content: center;
  background-color: #DB5807;
  border: none;
  font-family: 'Montserrat';
  font-size: small;
  font-weight: 600;
  border-radius: 23px;
  color: #FFFFFF;

  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
  }
`;
