
import { Container, Link, Logo, LogoContainer, NavLinksContainer, TituloLogo } from "./styles"

export default function Header() {
  return (
    <Container>
      <LogoContainer href="/">
        <Logo /> 
        <TituloLogo>MotAcoount</TituloLogo>
      </LogoContainer>
      <NavLinksContainer>
        <Link href="/about">Sobre</Link>
        <Link href="/auth/login">Login</Link>
      </NavLinksContainer>
    </Container>
  )
}
