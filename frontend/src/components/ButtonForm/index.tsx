import React from 'react';
import { Container } from './styles';

interface Props {
  placeholder?: string;
  type?: any;
  onClick?: any;
}

const ButtonForm: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.placeholder}
    </Container>
  )
};

export default ButtonForm;
