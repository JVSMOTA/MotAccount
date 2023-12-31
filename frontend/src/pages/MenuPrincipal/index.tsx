import { useNavigate, useParams } from "react-router-dom"
import DoubleContainer from "../../components/DoubleContainer"
import LightContainer from "../../components/LightContainer"
import NormalContainer from "../../components/NormalContainer"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export default function MenuPrincipal() {
	const [loja, setLoja] = useState<any[]>([]);
	const navigate = useNavigate()
	const { id } = useParams()

	useEffect(() => {
		const token = Cookies.get('token')
	
		if (!token) {
		  // Se não houver token, redirecione para a página de login
		  navigate('/auth/login')
		  return // Pare a execução aqui para não fazer a requisição sem token
		}
		
		// Se chegou aqui, há um token, então faça a requisição nescessária
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
		console.error("Erro ao obter loja:", error)
		})
	  }, [id, navigate])
	

	return (
		<>
		<DoubleContainer>
			<LightContainer>
				<h1>{loja.nome}</h1>
			</LightContainer>
			<NormalContainer>
			</NormalContainer>
		</DoubleContainer>
		</>
	)
}
