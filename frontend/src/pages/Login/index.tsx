import { WhiteContainer } from "./style";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";

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

	const handleForm = async (event: { preventDefault: () => any; }) => {
		try {
		  event.preventDefault();
		  const response = await fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			body: JSON.stringify(loginFormData),
			headers: {
			  'Content-Type': 'application/json',
			},
		  });
	
		  const json = await response.json();
		  console.log(response.status);
		  console.log(json);
		} catch (error) {
		  console.error('Erro durante o login:', error);
		}
	  }

	return (
		<>
		<WhiteContainer method="POST" onSubmit={handleForm}>
			<h1>Login da MotAccount</h1>
			<InputForm 
				placeHolderContainer="Email"
				name="email" 
				type="text" 
				placeholder="Digite seu Email"
				autoComplete="on"
				onChange={(e: { target: { value: any; }; }) => {handleFormEdit(e, 'email')}}
			/>
			<InputForm 
				placeHolderContainer="Senha"
				name="senha" 
				type="password"
				autoComplete="on"
				placeholder="Digite sua Senha"
				onChange={(e: { target: { value: any; }; }) => {handleFormEdit(e, 'senha')}}
			/>
			<ButtonForm placeholder="Entrar" type="submit"/>
		</WhiteContainer>
		</>
	)
}
