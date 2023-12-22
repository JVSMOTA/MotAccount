
import { Container, Hr, Link, Logo, LogoContainer, NavLinksContainer } from "./styles"

export default function Footer() {
  return (
    <Container>
      <Hr />
      <NavLinksContainer>
        <LogoContainer>
          <a href="/">
            <Logo />
          </a>
          <p>© 2023 MotAccount</p>
        </LogoContainer>
        <Link href="https://www.instagram.com/sapatariamota/" target="_blank">Instagram</Link>
        <Link href="https://github.com/JVSMOTA/MotAccountWeb/blob/main/LICENSE" target="_blank">MIT License</Link>
        <Link href="https://github.com/JVSMOTA/MotAccountWeb/" target="_blank">Github</Link>
      </NavLinksContainer>
    </Container>
  )
}
