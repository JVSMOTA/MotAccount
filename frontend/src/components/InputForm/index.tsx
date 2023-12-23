import React from 'react';
import { Container, ContainerInput, Input, Label } from './styles';


interface Props {
  name: string
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputForm: React.FC<Props> = (props) => {
  return (
    <Container>
      <Label htmlFor="">{props.name}</Label>
      <ContainerInput>
        <Input
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </ContainerInput>
    </Container>
  );
};

export default InputForm;
