import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  color: #DB5807;
  font-weight: bold;
  font-size: small;
  padding-left: 1.6vw;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: block;
  padding: 0.1vw;
`;

export const Input = styled.input`
  width: 100%;
  height: 6vh;
  padding: 0 1.5vw;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.3vh;
  line-height: 2vh;
  background-color: #FFF1E3;
  color: #FF9B3F;
  border-radius: 5px;
  border: #FFE6CF;
  outline: none;
  caret-color: #DB5807;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
  }

  &::placeholder {
    color: #FFB876;
  }

`;
