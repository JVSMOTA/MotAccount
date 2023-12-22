
import { Container, Link, Logo, LogoContainer, NavLinksContainer } from "./styles"

export default function Header() {
  return (
    <Container>
      <LogoContainer href="">
        <Logo /> 
        <p>MotAcoount</p>
      </LogoContainer>
      <NavLinksContainer>
        <Link href="https://www.instagram.com/sapatariamota/">Instagram</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/login">Login</Link>
      </NavLinksContainer>
    </Container>
  )
}
