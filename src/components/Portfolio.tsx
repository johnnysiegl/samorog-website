import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/portfolio/1.png';
import image2 from '../assets/portfolio/2.png';
import image3 from '../assets/portfolio/3.png';

const PortfolioContainer = styled.section`
  padding: 60px 20px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PortfolioItem = styled.div<{ backgroundImage: string }>`
  flex: 1 1 calc(33.333% - 10px);
  height: 200px;
  border-radius: 8px;
  background: url(${props => props.backgroundImage}) center/cover no-repeat;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  margin-bottom: 20px;
`;

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioItem backgroundImage={image1}></PortfolioItem>
      <PortfolioItem backgroundImage={image2}></PortfolioItem>
      <PortfolioItem backgroundImage={image3}></PortfolioItem>
      <PortfolioItem backgroundImage={image1}></PortfolioItem>
      <PortfolioItem backgroundImage={image2}></PortfolioItem>
    </PortfolioContainer>
  );
}

export default Portfolio;
