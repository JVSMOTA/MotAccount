import { Title, WhiteContainer } from "./style";
import ButtonForm from "../../components/ButtonForm";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function MenuLojas() {
  const [lojas, setLojas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
	const token = Cookies.get('token')

    if (!token) {
      // Se não houver token, redirecione para a página de login
      navigate('/auth/login');
      return; // Pare a execução aqui para não fazer a requisição sem token
    }

    // Se chegou aqui, há um token, então faça a requisição às lojas
    fetch('http://localhost:8080/lojas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => setLojas(retorno_convertido))
    .catch(error => {
      console.error("Erro ao obter lojas:", error);
    });
  }, [navigate]);

  return (
    <>
	<WhiteContainer>
      <Title>Acessar a Loja</Title>
      {lojas.map((obj: {
		  [x: string]: any; nome: string | undefined 
		}) => (
		<div key={obj.nome} style={{width:'100%'}}>
			<Link style={{borderRadius:'23px'}}
          		to={`/menuPrincipal/${Object.values(obj.links[0].href).join("").split(", ")[0].split("http://localhost:8080/lojas/")[1]}`}
        	>
				<ButtonForm placeholder={obj.nome}/>
			</Link>
		</div>
      ))}	
	</WhiteContainer>
    </>
  );
}
