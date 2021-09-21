import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Home} from './pages/Home/Home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-styles';

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <Header />
        <Home/>
      </>
    </ThemeProvider>
  );
}

export default App;
