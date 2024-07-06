import React from 'react';
import styled from 'styled-components';
import instagram from '../assets/instagram-ico.png';
import logo from '../assets/Logo.png';

const FooterContainer = styled.footer`
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  z-index: 1000;
  font-size: 10px;
`;

const LogoImage = styled.img`
  height: 30px; /* Ajuste a altura conforme necessário */
  margin-right: 10px; /* Espaço entre a imagem e o texto */
`;

const LogoInsta = styled.img`
  height: 20px; /* Ajuste a altura conforme necessário */
  margin-right: 10px; /* Espaço entre a imagem e o texto */
`;

const DevelopedBy = styled.span`
    margin-left: 10px;
`;

const Link = styled.a`
    text-decoration: none;
    color: #7d7d7d;
    margin-left: 3px;
`;

const Footer: React.FC = () => {
  
    return (
      <FooterContainer>
        Samorog <LogoImage src={logo} /> <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/samorogbr/'><LogoInsta src={instagram} /></a> | <DevelopedBy>Desenvolvido por <Link href='mailto:johsiegl@gmail.com'>JS Consultoria</Link></DevelopedBy>
      </FooterContainer>
    );
  }
  
  export default Footer;