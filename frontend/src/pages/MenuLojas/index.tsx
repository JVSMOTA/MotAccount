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
		<>
			<Title>Acessar a Loja</Title>
			{
				lojas.map((obj: { nome: string | undefined }) => (
					<ButtonForm placeholder={obj.nome}/>
				))
			}
		</>
	)
}
