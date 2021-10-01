import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Home} from './pages/Home/Home';
import {Cocktail} from './pages/Cocktail/Cocktail';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {MyCocktailContext} from './utils/cocktailContext'

function App() {
  const [cocktail, setCocktail] = useState<string>((''))
  return (
      <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <MyCocktailContext.Provider value= {{ cocktail, setCocktail }}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cocktail" component={Cocktail} />
            </Switch>
          </BrowserRouter>
        </MyCocktailContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
