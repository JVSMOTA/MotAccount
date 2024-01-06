
import { Container, LinkComponent, Logo, LogoContainer, NavLinksContainer, TituloLogo } from "./styles"

export default function Header() {
  return (
    <Container>
      <LogoContainer href="/">
        <Logo /> 
        <TituloLogo>MotAcoount</TituloLogo>
      </LogoContainer>
      <NavLinksContainer>
        <LinkComponent href="/about">Sobre</LinkComponent>
        <LinkComponent href="/auth/login">Login</LinkComponent>
      </NavLinksContainer>
    </Container>
  )
}
