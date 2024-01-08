import React from 'react';
import { Container, ContainerData, Div, Data } from './styles';

interface Props {
  date: Date;
  fisico: number;
  cartao: number;
  displayDate: boolean;
  onChange?: any;
}

const DataCell: React.FC<Props> = (props) => {

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

  const dia = String(props.date.getDate()).padStart(2, '0');
  const mes = String(props.date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então somamos 1
  const ano = props.date.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  return (
    <Container onChange={props.onChange}>
      {renderDate()}
      <ContainerData>
        <Data><p style={{ fontSize: '2vh' }}>Fisico</p>{'R$ ' + props.fisico.toFixed(2)}</Data>
        <Data><p style={{ fontSize: '2vh' }}>Cartão</p>{'R$ ' + props.cartao.toFixed(2)}</Data>
      </ContainerData>
    </Container>
  );
};

export default DataCell;
