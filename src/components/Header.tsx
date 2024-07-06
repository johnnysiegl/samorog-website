import React, { useState } from 'react';
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

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #333;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  /* @media (max-width: 768px) {
    padding-left: 20px;
  } */
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: 0.3s;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoText>SAMOROG</LogoText>
        <LogoImage src={logo} alt="Company Logo" />
      </LogoContainer>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <Nav isOpen={isOpen}>
        <NavLink to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>HOME</NavLink>
        <NavLink to="portfolio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>PORTFÓLIO</NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>CONTATO</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
