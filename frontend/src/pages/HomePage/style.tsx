import logo from '../../assets/logo.svg?react';
import styled from 'styled-components'

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  min-height: 1px;
  background-color: #FFA065;
`;

export const Div = styled.div`
  width: 100%;
  align-items: center;
`;

export const Logo = styled(logo)`
  width: auto;
  height: 12rem;
`;
