import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../assets/Logo.png';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  z-index: 1000;
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex: 1;
`;

const LogoImage = styled.img`
  height: 40px; /* Ajuste a altura conforme necessário */
  margin-right: 10px; /* Espaço entre a imagem e o texto */
`;

const LogoText = styled.span`
  font-size: 1.5em;
  font-family: 'Sedan SC', serif; /* Usando a fonte do Google */
`;

const Logo = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
        <LogoContainer>
        
        <LogoText>SAMOROG</LogoText>
        <LogoImage src={logo} alt="Company Logo" />
      </LogoContainer>
      {/* <Logo>SAMOROG</Logo> */}
      <Nav>
        <NavLink to="home" smooth={true} duration={500}>HOME</NavLink>
        <NavLink to="portfolio" smooth={true} duration={500}>PORTFÓLIO</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>CONTATO</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
