import { Container, LinkComponent, Logo, LogoContainer, NavLinksContainer, TituloLogo } from "./styles";
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const handleLogout = () => {
    // Limpar o token ou quaisquer dados de autenticação
    localStorage.removeItem('token');
    // Redirecionar para a página inicial
    window.location.href = '/';
  };

  const getLogoLink = () => {
    if (location.pathname === ('/auth/login') || location.pathname ===  ('/') || location.pathname === ('/about')) {
      return '/';
    }
    return '/menuLojas';
  };

  // Função para renderizar links com base no caminho atual
  const renderLinks = () => {
    if (location.pathname === '/menuLojas') {
      return (
        <>
          <LinkComponent to="/menuLojas">
            {({ isActive }) => (
              <span className={isActive ? "activated" : ""}>Menu de Lojas</span>
            )}
          </LinkComponent>
          <LinkComponent to="/" onClick={handleLogout}>Sair</LinkComponent>
        </>
      );
    } else if (location.pathname.startsWith('/menuPrincipal/')) {
      // Extrair o ID da rota "/menuPrincipal/:id"
      const parts = location.pathname.split('/');
      const id = parts[2]; // Assumindo que o ID está na terceira posição

      if (location.pathname.endsWith('/apurados') || location.pathname.endsWith('/agendamentos') || location.pathname.endsWith('/despesas')) {
        return (
          <>
            <LinkComponent to="/menuLojas">
              <span>Menu de Lojas</span>
            </LinkComponent>
            <LinkComponent to={`/menuPrincipal/${id}`}>
              <span>Menu Principal</span>
            </LinkComponent>
            <LinkComponent to="/" onClick={handleLogout}>Sair</LinkComponent>
          </>
        );
      } else {
        return (
          <>
            <LinkComponent to="/menuLojas">
              {({ isActive }) => (
                <span className={isActive ? "activated" : ""}>Menu de Lojas</span>
              )}
            </LinkComponent>
            <LinkComponent to={`/menuPrincipal/${id}`}>
              {({ isActive }) => (
                <span className={isActive ? "activated" : ""}>Menu Principal</span>
              )}
            </LinkComponent>
            <LinkComponent to="/" onClick={handleLogout}>Sair</LinkComponent>
          </>
        );
      }
    } else {
      // Caso padrão para outras páginas
      return (
        <>
          <LinkComponent to="/about">
            {({ isActive }) => (
              <span className={isActive ? "activated" : ""}>Sobre</span>
            )}
          </LinkComponent>
          <LinkComponent to="/auth/login">
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
      <LogoContainer>
        <LinkComponent to={getLogoLink()} className="logoContainer">
          <Logo />
          <TituloLogo>MotAccount</TituloLogo>
        </LinkComponent>
      </LogoContainer>
      <NavLinksContainer>
        {renderLinks()}
      </NavLinksContainer>
    </Container>
  );
}
