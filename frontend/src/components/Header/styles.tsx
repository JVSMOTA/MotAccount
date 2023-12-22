import styled from 'styled-components'
import logo from '../../assets/logo.svg?react'

export const Container = styled.div`
  display: flex;
  height: 10vh;
  background-color: #FF9B3F;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 10%;
  color: #FFFFFF;
  font-weight: bold;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Logo = styled(logo)`
  width: auto;
  height: 7vh;
`;

export const Menu = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
`;


