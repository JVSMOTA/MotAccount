import { Link, useNavigate, useParams } from "react-router-dom";
import DoubleContainer from "../../components/DoubleContainer";
import LightContainer from "../../components/LightContainer";
import NormalContainer from "../../components/NormalContainer";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ContainerData, Hr} from "./style";
import ButtonForm from "../../components/ButtonForm";
import ButtonAmmount from "../../components/ButtonAmmount";
import ButtonExpenses from "../../components/ButtonExpenses";
import ButtonSchedules from "../../components/ButtonSchedules";
import Header from "../../components/Header";
import DataAmmountCell from "../../components/DataAmmountCell";

interface Loja {
  nome: string;
  tipo: string;
  endereco: string;
}

export default function MenuApurados() {
  const [loja, setLoja] = useState<Loja>()
  const [apurados, setApurados] = useState([]);
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
    fetch(`http://192.168.5.160:8080/lojas/${id}`, {
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


  useEffect(() => {
    const token = Cookies.get('token')

    if (!token) {
      navigate('/auth/login')
      return
    }

    // Se chegou aqui, há um token, então faça a requisição necessária
    fetch(`http://192.168.5.160:8080/lojas/${id}/apurados`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => setApurados(retorno_convertido))
    .catch(error => {
      console.error("Erro ao obter apurados:", error);
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
            <DataAmmountCell date={data} fisico={0} cartao={0} displayDate={false}/>
            <ButtonForm placeholder="Alterar apurado do dia"></ButtonForm>
            
            <Link style={{borderRadius:'23px', width:'100%'}} 
              to={`/menuPrincipal/${[id]}/apurados`}
              >
              <ButtonAmmount placeholder="Apurados" />
            </Link>
            <Link style={{borderRadius:'23px', width:'100%'}} 
              to={`/menuPrincipal/${[id]}/agendamentos`}
              >
              <ButtonExpenses placeholder="Agendamentos" />
            </Link>
            <Link style={{borderRadius:'23px', width:'100%'}} 
              to={`/menuPrincipal/${[id]}/despesas`}
              >
              <ButtonSchedules placeholder="Despesas" />
            </Link>
          </LightContainer>
          <NormalContainer>
            <h1 style={{textAlign:"left"}} >Apurados do Mês</h1>
            <ContainerData>
              {apurados.map((obj: {[x: string]: any; data: string; apuradoFisico: number; apuradoCartao: number }) => (
                <DataAmmountCell date={new Date(obj.data)} fisico={obj.apuradoFisico} cartao={obj.apuradoCartao} displayDate={true}/>
              ))}
            </ContainerData>
          </NormalContainer>
        </DoubleContainer>
      </>
    </>
  );
}
