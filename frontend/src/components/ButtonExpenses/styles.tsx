import styled from 'styled-components'
import { Icon } from '@iconify/react';

export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 2.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: #FF7A00;
  border: none;
  font-size: larger;
  font-weight: 600;
  border-radius: 18px;
  padding: 0 23px;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    opacity: 1.0;
    transform: scale(0.98);
  }
`;

export const StyledIcon = styled(Icon)`
  color: #FFFFFF; // Defina a cor conforme necessário
  font-size: 24px; // Ajuste o tamanho conforme necessário
`;
