import React from 'react';
import { Container } from './styles';

interface Props {
  placeholder?: string;
  type?: any;
  onClick?: any;
}

const ButtonForm: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onClick} type={props.type}>
      {props.placeholder}
    </Container>
  )
};

export default ButtonForm;
