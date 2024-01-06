import { Container, LinkComponent, Logo, LogoContainer, NavLinksContainer, TituloLogo } from "./styles"
import { useLocation } from 'react-router-dom';
import Cookies from "js-cookie";

export default function Header() {
  const location = useLocation();

  // Função para renderizar links com base no caminho atual
  const renderLinks = () => {
    const handleLogout = () => {
      // Remove o token de acesso ao clicar em "Sair"
      Cookies.remove('token');
    };
  
    if (location.pathname === '/menuLojas') {
      return (
        <>
          <LinkComponent to={"/menuLojas"}>
          {({ isActive }) => (
            <span className={isActive ? "activated" : ""}>Menu de Lojas</span>
          )}
          </LinkComponent>
          <LinkComponent to={"/"} onClick={handleLogout}>Sair</LinkComponent>
        </>
      );
    } else if (location.pathname.startsWith('/menuPrincipal/')) {
      // Extrair o ID da rota "/menuPrincipal/:id"
      const id = location.pathname.split('/').pop();
      return (
        <>
          <LinkComponent to={"/menuLojas"}>
          {({ isActive }) => (
            <span className={isActive ? "activated" : ""}>Menu de Lojas</span>
          )}
          </LinkComponent>
          <LinkComponent to={`/menuPrincipal/${id}`}>
          {({ isActive }) => (
            <span className={isActive ? "activated" : ""}>Menu Principal</span>
          )}
          </LinkComponent>
          <LinkComponent to={"/"} onClick={handleLogout}>Sair</LinkComponent>
        </>
      );
    } else {
      // Caso padrão para outras páginas
      return (
        <>
          <LinkComponent to={"/about"}>
          {({ isActive }) => (
            <span className={isActive ? "activated" : ""}>Sobre</span>
          )}
          </LinkComponent>
          <LinkComponent to={"/auth/login"}>
          {({ isActive }) => (
            <span className={isActive ? "activated" : ""}>Login</span>
          )}
          </LinkComponent>
        </>
      );
    }
  };

  return (
    <Container>
      <LogoContainer >
        <LinkComponent to={"/"} className="logoContainer">
          <Logo /> 
          <TituloLogo>MotAcoount</TituloLogo>
        </LinkComponent>
      </LogoContainer>
      <NavLinksContainer>
        {renderLinks()}
      </NavLinksContainer>
    </Container>
  );
}
