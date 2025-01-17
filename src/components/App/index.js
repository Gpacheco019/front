import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom/';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/theme/default';

import * as S from './styles';

import Header from '../Header';

import Routes from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <S.Container>
          <Header />
          <Routes />
          {/* <ContactLists /> */}
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
