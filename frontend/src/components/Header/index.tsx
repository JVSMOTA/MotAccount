
import { Container, Logo, LogoContainer, Menu } from "./styles"

export default function Header({children}:any) {
  return (
    <Container>
      <LogoContainer>
        <Logo /> 
        <p>MotAcoount</p>
      </LogoContainer>
      {children}
      <Menu>
        <p>Instagram</p>
        <hr />
        <p>Sobre</p>
        <hr />
        <p>Login</p>
      </Menu>
    </Container>
  )
}
