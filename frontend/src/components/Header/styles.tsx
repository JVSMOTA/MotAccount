import styled from 'styled-components';
import logo from '../../assets/logo - transparent.svg?react';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: #FF7A00;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5vw;
  color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 0 3vw;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;

  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Logo = styled(logo)`
  width: auto;
  height: 1rem;
`;

export const TituloLogo = styled.p`
  color: #FFFFFF;
  font-weight: bold;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 1vw;
`;

export const LinkComponent = styled.div`
  font-size: 1rem;
  font-weight: 600;

  &:hover,
  &:active {
    cursor: pointer;
    opacity: 0.8;
  }
`;
