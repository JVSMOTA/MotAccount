import styled from 'styled-components';
import logo from '../../assets/logo - orange.svg?react'

export const Container = styled.div`
  display: flex;
  height: 20%;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5vw;

  @media (max-width: 768px) {
    padding: 0 3%;
    height: 20%;
  }
`;

export const Hr = styled.hr`
  border: 0;
  width: 74%;
  height: 1px;
  background-color: #FFA065;

  @media (max-width: 768px) {
    width: 90vw;
    height: 1px;

  }

`; 

export const NavLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10%;
  font-size: small;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  p {
    color: #FFA065;
  }
`;

export const Logo = styled(logo)`
  width: auto;
  height: 1rem;
  
  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  font-weight: 400;
  color: #DB5807;
  
  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
  }
`;
