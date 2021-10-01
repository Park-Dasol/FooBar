import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Home} from './pages/Home/Home';
import {Cocktail} from './pages/Cocktail/Cocktail';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from '@loadable/component';

// const Home = loadable(() => import('./pages/Home/Home'));

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cocktail" component={Cocktail} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
