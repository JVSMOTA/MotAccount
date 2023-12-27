import { WhiteContainer } from "./style";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";

export default function Login() {
	return (
		<>
		<WhiteContainer>
			<h1>Login da MotAccount</h1>
			<InputForm 
				placeHolderContainer="Email"
				name="email" 
				type="text" 
				placeholder="Digite seu Email"
			/>
			<InputForm 
				placeHolderContainer="Senha"
				name="senha" 
				type="password" 
				placeholder="Digite sua Senha"
			/>
			<ButtonForm placeholder="Entrar" type="submit"/>
		</WhiteContainer>
		</>
	)
}
