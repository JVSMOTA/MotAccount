
import PageContainer from "../../components/PageContainer"
import Header from "../../components/Header"
import JustifyContainer from "../../components/JustifyContainer"
import Footer from "../../components/Footer"
import FormContainer from "../../components/FormContainer"
import { Title } from "./style"
import InputForm from "../../components/InputForm"

export default function Login() {
	return (
		<PageContainer>
			<Header />
			<JustifyContainer>
				<FormContainer>
					<Title>Login da MotAccount</Title>
					<InputForm 
					name={"Email"} 
					type="text" 
					placeholder="Digite seu Email"
					/>
					<InputForm 
					name={"Senha"} 
					type="password" 
					placeholder="Digite sua Senha"
					/>
				</FormContainer>
			</JustifyContainer>
			<Footer />
		</PageContainer>
	)
}
