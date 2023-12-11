import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Router from '../../Router';

import { Container } from './styles';

export default function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>

    </ThemeProvider>

  );
}
