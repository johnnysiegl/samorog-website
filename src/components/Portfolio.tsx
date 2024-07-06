import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../assets/portfolio/1.png';
import image2 from '../assets/portfolio/2.png';
import image3 from '../assets/portfolio/3.png';
import image4 from '../assets/portfolio/4.png';
import image5 from '../assets/portfolio/5.png';

const PortfolioContainer = styled.section`
  padding: 60px 20px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-family: 'Great Vibes', cursive;
  font-size: 60px;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    border-bottom: 2px solid #000;
    margin: 0 20px;
  }
`;

const PortfolioItem = styled.div<{ backgroundImage: string }>`
  flex: 1 1 calc(33.333% - 10px);
  height: 200px;
  border-radius: 8px;
  background: url(${props => props.backgroundImage}) center/cover no-repeat;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
`;

const FullscreenImage = styled.div<{ backgroundImage: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  
  &::before {
    content: '';
    display: block;
    width: 80%;
    height: 80%;
    background: url(${props => props.backgroundImage}) center/contain no-repeat;
  }
`;

const Portfolio: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <>
      {fullscreenImage && (
        <FullscreenImage
          backgroundImage={fullscreenImage}
          onClick={() => setFullscreenImage(null)}
        />
      )}
      <TitleContainer id="portfolio">
        <Title>
          portfólio
        </Title>
      </TitleContainer>
      <PortfolioContainer>
        <PortfolioItem backgroundImage={image1} onClick={() => setFullscreenImage(image1)}></PortfolioItem>
        <PortfolioItem backgroundImage={image2} onClick={() => setFullscreenImage(image2)}></PortfolioItem>
        <PortfolioItem backgroundImage={image3} onClick={() => setFullscreenImage(image3)}></PortfolioItem>
        <PortfolioItem backgroundImage={image4} onClick={() => setFullscreenImage(image4)}></PortfolioItem>
        <PortfolioItem backgroundImage={image5} onClick={() => setFullscreenImage(image5)}></PortfolioItem>
      </PortfolioContainer>
    </>
  );
}

export default Portfolio;
