import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Sedan SC', serif;
  }
`;

const AppContainer = styled.div`
  scroll-behavior: smooth;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <main>
        <MainContent />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App;
