import ButtonForm from "../ButtonForm"
import InputForm from "../InputForm"
import { Container } from "./styles"

export default function LoginForm({ updateFormData }: any) {

  return (
    <Container>
      <h1>Login da MotAccount</h1>
      <InputForm 
        placeHolderContainer="Email"
        name="email" 
        type="text" 
        placeholder="Digite seu Email"
        onChange={updateFormData}
      />
      <InputForm 
        placeHolderContainer="Senha"
        name="senha" 
        type="password" 
        placeholder="Digite sua Senha"
        onChange={updateFormData}
      />
      <ButtonForm placeholder="Entrar" type="submit"/>
    </Container>
  )
}
