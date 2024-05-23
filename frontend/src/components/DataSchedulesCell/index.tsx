import React from 'react';
import { Container, Div, Data, ContainerData } from './styles';

interface Props {
  date: Date;
  razao: string;
  valor: number;
  displayDate: boolean;
  displayBorder: boolean;
  onChange?: any;
}

const DataShedulesCell: React.FC<Props> = (props) => {

  const renderDate = () => {
    if (props.displayDate) {
      return (
        <>
          <Div>
            <p style={{ fontSize: '1.6vh' }}>{nomeDiaSemana}</p>
            <p style={{ fontSize: '1.6vh' }}>{dataFormatada}</p>  
          </Div>        
        </>
      );
    }
  }

  const numeroDiaSemana = props.date.getDay();
  const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const nomeDiaSemana = diasDaSemana[numeroDiaSemana];

  const dia = String(props.date.getDate() + 1).padStart(2, '0'); // Mês começa do zero
  const mes = String(props.date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então somamos 1
  const ano = props.date.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  return (
    <Container onChange={props.onChange}>
      {renderDate()}
      <ContainerData displayBorder={props.displayBorder}>
        <input type='checkbox' />
        <Data><p style={{ fontSize: '2vh' }}>{props.razao}</p>{'R$ ' + props.valor.toFixed(2)}</Data>
      </ContainerData>
    </Container>
  );
};

export default DataShedulesCell;
