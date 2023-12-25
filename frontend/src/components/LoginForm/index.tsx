
import ButtonForm from "../ButtonForm"
import InputForm from "../InputForm"
import { Container } from "./styles"

export default function LoginForm() {
  return (
    <Container>
      <h1>Login da MotAccount</h1>
      <InputForm 
      placeHolderContainer="Email"
      name={"email"} 
      type="text" 
      placeholder="Digite seu Email"
      />
      <InputForm 
      placeHolderContainer="Senha"
      name={"senha"} 
      type="password" 
      placeholder="Digite sua Senha"
      />
      <ButtonForm placeholder="Entrar" type="submit"/>
    </Container>
  )
}
