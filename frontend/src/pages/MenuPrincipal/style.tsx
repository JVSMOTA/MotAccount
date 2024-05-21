
import styled from 'styled-components'

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  min-height: 1px;
  background-color: #FFA065;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 28vh;
  padding: 9px;
  padding-right: 5px;
  gap: 2px;
  border-radius: 5px;
  border: 1px solid #DB5605;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #FFFFFF;
    border-radius: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #DB5605;
    border-radius: 3px;
  }

`;

export const Div = styled.div`
  width: 100%;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2%;
  margin-bottom: 20px;
`;

export const LightProfileContainer = styled.div`
  display: flex;
  flex: 0 0 49%;
`;
