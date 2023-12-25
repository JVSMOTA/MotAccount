
import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import FormContainer from "../../components/AboutContainer"
import { Title } from "./style"
import ButtonForm from "../../components/ButtonForm"
import { useEffect, useState } from "react"

export default function MenuLojas() {
	const [lojas, setLojas] = useState([])

	useEffect(() => {
		fetch("http://localhost:8080/lojas")
		.then(retorno => retorno.json())
		.then(retorno_convertido => setLojas(retorno_convertido))
	}, [])

	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<FormContainer>
					<Title>Acessar a Loja</Title>
					{
						lojas.map((obj: { nome: string | undefined }) => (
							<ButtonForm placeholder={obj.nome}/>
						))
					}
				</FormContainer>
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
