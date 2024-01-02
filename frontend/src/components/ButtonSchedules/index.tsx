import React from 'react';
import { Container, StyledIcon } from './styles';

interface Props {
  placeholder?: string;
  type?: any;
  onClick?: any;
}

const ButtonSchedules: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onClick} type={props.type}>
      {props.placeholder}
      <StyledIcon icon={"mdi:hand-coin-outline"}/>
    </Container>
  )
};

export default ButtonSchedules;
