import styled from 'styled-components';
import logo from '../../assets/logo - orange.svg?react'

export const Container = styled.div`
  display: flex;
  height: 6rem;
  width: 100%;
  gap: 5vh;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
    gap: 3vh;
    
    hr {
      height: 20px;
    }
    
  }
`;

export const Hr = styled.hr`
  border: 0;
  width: 74%;
  height: 1px;
  background-color: #FFA065;
  margin: 0;

  @media (max-width: 768px) {
    width: 90%;
    min-height: 1px;
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
