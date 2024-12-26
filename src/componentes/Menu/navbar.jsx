import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logos/logoNavbar';

// Estilos con Styled-Components
const NavbarContainer = styled.div`
  position: relative;
`;

const NavbarWrapper = styled.nav`
  position: fixed; /* Navbar fijo */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté sobre otros elementos */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0d1117; /* Fondo negro */
  color: #ffffff;
  border-bottom: 2px solid #1e1e1e; /* Línea de separación inferior */
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 20px; /* Espacio desde el borde izquierdo */
`;

const CenterSection = styled.div`
  flex: 2;
  text-align: center;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 30px;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #00ffff; /* Cambiar color al pasar el mouse */
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const LanguageSelector = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #1c1f26;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LeftSection>
          <Logo />
        </LeftSection>
        <CenterSection>
          <NavItems>
            <NavItem>
              <Link to="/">Inicio</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">Nosotros</Link>
            </NavItem>
            <NavItem>
              <Link to="/reales">Reales</Link>
            </NavItem>
            <NavItem>
              <Link to="/dolares">Dólares</Link>
            </NavItem>
            <NavItem>
              <Link to="/blog">Blog</Link>
            </NavItem>
          </NavItems>
        </CenterSection>
        <RightSection>
          <LanguageSelector>
            <option>Español</option>
            <option>Inglés</option>
          </LanguageSelector>
        </RightSection>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
