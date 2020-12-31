import React from 'react';
import { useAppInfo } from 'provider/Provider';
import { Header } from 'components/header';
import styled from 'styled-components';
import { WheaterContent } from 'components/wheater-content';
import cloud from 'assets/cloud.png';

const MainSection = () => {
  const { isSearchOpen } = useAppInfo();
  return (
    <MainSectionContainer isSearchOpen={isSearchOpen}>
      <Header />
      <WeatherIllustration src={cloud} />
      <WheaterContent />
    </MainSectionContainer>
  );
};

type MainTypes = {
  isSearchOpen: boolean;
};

const MainSectionContainer = styled.div<MainTypes>`
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? '0.4' : '1')};
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: ${({ isSearchOpen }) => (isSearchOpen ? 0 : 1)};
`;

const WeatherIllustration = styled.img`
  flex-basis: 12%;
  width: 100px;

  object-fit: contain;
  margin: 30px 0 40px 0;
`;

export default MainSection;
