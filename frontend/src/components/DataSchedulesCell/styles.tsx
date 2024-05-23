import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 2px;
`;

export const InputBox = styled.input.attrs({ type: 'checkbox' })`
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #DB5807;
  font-weight: bold;
  font-size: 1vh;
  padding: 0 10px;
`;

export const ContainerData = styled.div<{ displayBorder: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ displayBorder }) => displayBorder ? '9px' : '0px'};
  gap: 2px;
  border-radius: 5px;
  border: ${({ displayBorder }) => displayBorder ? '1px solid #DB5605' : 'none'};
`;


export const Data = styled.div`
  display: flex;
  width: 100%;
  height: 3vh;
  background-color: #FFE6CF;
  color: #DB5605;
  font-size: 2vh;
  padding:0 10px;
  justify-content: space-between;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  align-items: center;
`;

