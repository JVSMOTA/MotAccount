import { useNavigate, useParams } from "react-router-dom";
import DoubleContainer from "../../components/DoubleContainer";
import LightContainer from "../../components/LightContainer";
import NormalContainer from "../../components/NormalContainer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Hr, LightProfileContainer, ProfileContainer } from "./style";
import ButtonForm from "../../components/ButtonForm";
import ButtonAmmount from "../../components/ButtonAmmount";
import ButtonExpenses from "../../components/ButtonExpenses";
import ButtonSchedules from "../../components/ButtonSchedules";
import Header from "../../components/Header";
import InputForm from "../../components/InputForm";
import DataCell from "../../components/DataCell";

interface Loja {
  nome: string;
  tipo: string;
  endereco: string;
}

export default function MenuPrincipal() {
  const [loja, setLoja] = useState<Loja>()
  const navigate = useNavigate()
  const { id } = useParams()

  const data = new Date();
  const numeroDiaSemana = data.getDay();
  const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const nomeDiaSemana = diasDaSemana[numeroDiaSemana];

  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então somamos 1
  const ano = data.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  useEffect(() => {
    const token = Cookies.get('token')

    if (!token) {
      navigate('/auth/login')
      return
    }

    // Se chegou aqui, há um token, então faça a requisição necessária
    fetch(`http://localhost:8080/lojas/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => setLoja(retorno_convertido))
    .catch(error => {
      console.error("Erro ao obter loja:", error);
    })
  }, [id, navigate])

  return (
    <>
    <Header />
      <>
        <DoubleContainer>
          <LightContainer>
            <h1>{loja?.nome}</h1>
            <div style={{width:"100%"}}>
              <Hr style={{marginBottom:"5px"}}/>
              <h2 style={{marginBottom:"0"}}>{nomeDiaSemana}</h2>
              <h2 style={{marginBottom:"5px"}}>{dataFormatada}</h2>
              <Hr />
            </div>
            <DataCell date={data} fisico={0} cartao={0} displayDate={true}/>
            <ButtonForm placeholder="Alterar apurado do dia"></ButtonForm>
            <ButtonAmmount placeholder="Apurados" />
            <ButtonExpenses placeholder="Agendamentos" />
            <ButtonSchedules placeholder="Despesas" />
          </LightContainer>
          <NormalContainer>
            <ProfileContainer>
              <LightProfileContainer>
                <InputForm placeHolderContainer={"Nome"} placeholder={loja?.nome} disabled></InputForm>
              </LightProfileContainer>
              <LightProfileContainer>
                <InputForm placeHolderContainer={"Tipo"} placeholder={loja?.tipo} disabled></InputForm>
              </LightProfileContainer>
              <InputForm placeHolderContainer={"Endereço"} placeholder={loja?.endereco} disabled></InputForm>
            </ProfileContainer>
            <Hr style={{marginBottom:"20px"}} />
            <h1 style={{textAlign:"left"}} >Agendamentos do Dia</h1>
          </NormalContainer>
        </DoubleContainer>
      </>
    </>
  );
}
