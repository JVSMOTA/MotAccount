import React from 'react';
import { Container, StyledIcon } from './styles';

interface Props {
  placeholder?: string;
  type?: any;
  onClick?: any;
}

const ButtonExpenses: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onClick} type={props.type}>
      {props.placeholder}
      <StyledIcon icon={"material-symbols:calendar-add-on-outline-rounded"}/>
    </Container>
  )
};

export default ButtonExpenses;
