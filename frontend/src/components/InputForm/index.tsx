import React from 'react';
import { Container, ContainerInput, Input, Label } from './styles';


interface Props {
  name: string
  type?: string;
  placeHolderContainer: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: any;
  value?: any;
}

const InputForm: React.FC<Props> = (props) => {
  return (
    <Container>
      <Label htmlFor="">{props.placeHolderContainer}</Label>
      <ContainerInput>
        <Input
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
        />
      </ContainerInput>
    </Container>
  );
};

export default InputForm;
