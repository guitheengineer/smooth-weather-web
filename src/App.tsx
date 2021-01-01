import styled from 'styled-components';
import { Search } from './components/search';
import { MainSection } from './components/main-section';
import GlobalStyle from 'GlobalStyle';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <BackgroundSvg
        width="414"
        height="471"
        viewBox="0 0 414 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-16.6965 239.515C6.83013 237.254 61.8095 220.748 81.4359 269.288C105.969 329.963 40.2958 345.038 59.1674 401.944C78.039 458.851 29.7277 492.014 -25 453.197"
          stroke="white"
          stroke-opacity="0.3"
          stroke-linecap="round"
          stroke-dasharray="10 10"
        />
        <path
          d="M152.5 89L147.918 96.5229C106.746 164.116 150.338 251.51 229.1 259.28V259.28C280.398 264.34 320.894 305.429 325.548 356.765V356.765C330.601 412.492 377.35 455.5 433.306 455.5H484"
          stroke="white"
          stroke-opacity="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="10 10"
        />
        <path
          d="M650.926 46.5063V46.5063C621.635 -31.3923 520.048 -50.9194 462.571 9.26836V9.26836C430.08 43.2915 379.631 54.3473 336.122 36.4517L324.884 31.8294C277.642 12.3977 223.428 21.972 185.699 56.4098L158 81.6924"
          stroke="white"
          stroke-opacity="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="10 10"
        />
      </BackgroundSvg>
      <Search />
      <MainSection />
    </AppContainer>
  );
};

const BackgroundSvg = styled.svg`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 80vh;
`;

const AppContainer = styled.div`
  background: linear-gradient(180deg, #47bfdf 0%, #4a91ff 100%);
  height: 100vh;
  display: flex;
  padding: 60px 0;
  justify-content: center;
`;

export const Icon = styled.img`
  width: ${({ width }) => (width ? width : 24)}px;
  height: ${({ height }) => (height ? height : 24)}px;
`;

export default App;
