import React from 'react';
import styled from 'styled-components';

const MainContentContainer = styled.section`
  padding: 60px 20px;
  background: #f0f0f0;
`;

const Title = styled.div`
  font-family: 'Great Vibes', cursive;
  font-size: 60px;
  text-align: center;
`;

const ContentContainer = styled.div`
  margin-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaçamento entre as divs */
`;      

const ContentBox = styled.div`
  width: 450px;
  height: 80px; /* Altura dos retângulos */
  background-color: #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContent: React.FC = () => {
  return (
    <MainContentContainer id="home">
      <Title>Tome o primeiro passo para um futuro brilhante!</Title>
      <ContentContainer>
        <ContentBox>GERENCIAMENTO DE MARCA</ContentBox>
        <ContentBox>CONTEÚDO MÍDIAS SOCIAIS</ContentBox>
        <ContentBox>ARTE DIGITAL</ContentBox>
        <ContentBox>A SOLUÇÃO QUE SUA EMPRESA PRECISA</ContentBox>
      </ContentContainer>
    </MainContentContainer>
  );
}

export default MainContent;
