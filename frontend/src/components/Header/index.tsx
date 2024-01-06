import { Container, Link, Logo, LogoContainer, NavLinksContainer, TituloLogo } from "./styles"
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Função para renderizar links com base no caminho atual
  const renderLinks = () => {
    if (location.pathname === '/menuLojas') {
      return (
        <>
          <Link href="/menuLojas">Menu Lojas</Link>
          <Link href="/">Sair</Link>
        </>
      );
    } else if (location.pathname.startsWith('/menuPrincipal/')) {
      // Extrair o ID da rota "/menuPrincipal/:id"
      const id = location.pathname.split('/').pop();
      return (
        <>
          <Link href="/menuLojas">Menu Lojas</Link>
          <Link href={`/menuPrincipal/${id}`}>Menu Principal</Link>
          <Link href="/">Sair</Link>
        </>
      );
    } else {
      // Caso padrão para outras páginas
      return (
        <>
          <Link href="/about">Sobre</Link>
          <Link href="/auth/login">Login</Link>
        </>
      );
    }
  };

  return (
    <Container>
      <LogoContainer href="/">
        <Logo /> 
        <TituloLogo>MotAcoount</TituloLogo>
      </LogoContainer>
      <NavLinksContainer>
        {renderLinks()}
      </NavLinksContainer>
    </Container>
  );
}
