import React from 'react';
import { Container, StyledIcon } from './styles';

interface Props {
  placeholder?: string;
  type?: any;
  onClick?: any;
}

const ButtonAmmount: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onClick} type={props.type}>
      {props.placeholder}
      <StyledIcon icon={"tabler:coin"}/>
    </Container>
  )
};

export default ButtonAmmount;
