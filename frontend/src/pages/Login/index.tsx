import { WhiteContainer } from "./style"
import InputForm from "../../components/InputForm"
import ButtonForm from "../../components/ButtonForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import Header from "../../components/Header"

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		senha: ''
	})

	const navigate = useNavigate()

	const handleFormEdit = (event: { target: { value: any; }; }, name: any) => {
		setLoginFormData({
			...loginFormData,
			[name]: event.target.value
		})
	}

	const handleForm = async (event: { preventDefault: () => any; }) => {
		try {
		  event.preventDefault();
		  const response = await fetch('http://192.168.5.160:8080/auth/login', {
			method: 'POST',
			body: JSON.stringify(loginFormData),
			headers: {
			  'Content-Type': 'application/json',
			},
		  });
	  
		  const json = await response.json();
	  
		  if (response.status !== 200) {
			Object.values(json).join(', ').split(', ').map((err) => (
				console.error(err)
			))
		  } else {
			Cookies.set('token', json.token, { expires: 1 })
			navigate("/menuLojas")
		  }
	
		} catch (error) {
		  console.error(error);
		}
	  };
	return (
	<>
		<Header />
		<div style={{display:'flex', height:'75vh', width:'100vw', justifyContent:'center', alignContent:'center'}}>
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
		</div>
	</>
	)
}
