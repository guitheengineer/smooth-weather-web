import styled from 'styled-components';
import { Search } from './components/search';
import { MainSection } from './components/main-section';
import GlobalStyle from 'GlobalStyle';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Search />
      <MainSection />
    </AppContainer>
  );
};

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
