import { Container, LinkComponent, Logo, LogoContainer, NavLinksContainer, TituloLogo } from "./styles"
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Função para renderizar links com base no caminho atual
  const renderLinks = () => {
    if (location.pathname === '/menuLojas') {
      return (
        <>
          <LinkComponent>
            <Link to={"/menuLojas"}>Menu Lojas</Link>
          </LinkComponent>
          <LinkComponent>
            <Link to={"/"}>Sair</Link>
          </LinkComponent>
        </>
      );
    } else if (location.pathname.startsWith('/menuPrincipal/')) {
      // Extrair o ID da rota "/menuPrincipal/:id"
      const id = location.pathname.split('/').pop();
      return (
        <>
          <LinkComponent>
            <Link to={"/menuLojas"}>Menu Lojas</Link>
          </LinkComponent>
          <LinkComponent>
            <Link to={`/menuPrincipal/${id}`}>Menu Principal</Link>
          </LinkComponent>
          <LinkComponent>
            <Link to={"/"}>Sair</Link>
          </LinkComponent>
        </>
      );
    } else {
      // Caso padrão para outras páginas
      return (
        <>
          <LinkComponent>
            <Link to={"/about"}>Sobre</Link>
          </LinkComponent>
          <LinkComponent>
            <Link to={"/auth/login"}>Login</Link>
          </LinkComponent>
        </>
      );
    }
  };

  return (
    <Container>
      <LogoContainer >
        <Link to={"/"} style={{display:"flex", gap:"10px"}}>
          <Logo /> 
          <TituloLogo>MotAcoount</TituloLogo>
        </Link>
      </LogoContainer>
      <NavLinksContainer>
        {renderLinks()}
      </NavLinksContainer>
    </Container>
  );
}
