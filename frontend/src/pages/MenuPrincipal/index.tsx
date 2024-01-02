import { useNavigate, useParams } from "react-router-dom";
import DoubleContainer from "../../components/DoubleContainer";
import LightContainer from "../../components/LightContainer";
import NormalContainer from "../../components/NormalContainer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Hr } from "./style";
import ButtonForm from "../../components/ButtonForm";
import ButtonAmmount from "../../components/ButtonAmmount";
import ButtonExpenses from "../../components/ButtonExpenses";
import ButtonSchedules from "../../components/ButtonSchedules";

interface Loja {
  nome: string;
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
      <DoubleContainer>
        <LightContainer>
          <h1>{loja?.nome}</h1>
		  <Hr></Hr>
		  <h2>{nomeDiaSemana}</h2>
		  <h2>{dataFormatada}</h2>
		  <Hr></Hr>
		  <ButtonForm placeholder="Alterar apurado do dia"></ButtonForm>
		  <ButtonAmmount placeholder="Apurados" />
		  <ButtonExpenses placeholder="Agendamentos" />
		  <ButtonSchedules placeholder="Despesas" />
        </LightContainer>
        <NormalContainer>
          {/* Adicione outros componentes conforme necessário */}
        </NormalContainer>
      </DoubleContainer>
    </>
  );
}
