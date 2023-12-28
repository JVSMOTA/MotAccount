import { WhiteContainer } from "./style";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";
import { useEffect, useState } from "react";

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		senha: ''
	})

	const handleFormEdit = (event: { target: { value: any; }; }, name: any) => {
		setLoginFormData({
			...loginFormData,
			[name]: event.target.value
		})
	}

	const handleForm = async (event: { preventDefault: () => void; }) => {
		try {
			console.log(loginFormData)

			event.preventDefault()
			const response = await fetch('http://localhost:5173/auth/login', {
				method: 'POST',
				body: JSON.stringify(loginFormData)
			})

			const json = await response.json()
			console.log(response.status)
			console.log(json)

		} catch (error) {

		}
	}

	return (
		<>
		<WhiteContainer>
			<h1>Login da MotAccount</h1>
			<InputForm 
				placeHolderContainer="Email"
				name="email" 
				type="text" 
				placeholder="Digite seu Email"
				required
				value={loginFormData.email}
				onChange={(e: { target: { value: any; }; }) => {handleFormEdit(e, 'email')}}
			/>
			<InputForm 
				placeHolderContainer="Senha"
				name="senha" 
				type="password" 
				placeholder="Digite sua Senha"
				required
				value={loginFormData.senha}
				onChange={(e: { target: { value: any; }; }) => {handleFormEdit(e, 'senha')}}
			/>
			<ButtonForm placeholder="Entrar" type="submit" onClick={handleForm}/>
		</WhiteContainer>
		</>
	)
}
