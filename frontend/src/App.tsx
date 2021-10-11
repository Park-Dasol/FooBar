import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {Home} from './pages/Home';
import {Cocktail} from './pages/Cocktail';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {MyCocktailContext} from './utils/cocktailContext'
import {ICocktail, Itheme} from './utils/db'
import { Footer } from './components/Footer/Footer';
import {About} from './pages/About/About'
import { Contact } from './pages/Contact';
import { MyHeaderThemeContext } from './utils/headerContext';
import media from './styles/media';


function App() {
  const [cocktail, setCocktail] = useState<ICocktail>();
  const [headerTheme, setHeaderTheme] = useState<Itheme>(lightTheme);

  return (
      <ThemeProvider theme={{lightTheme, ...media}}>
      <>
        <GlobalStyle />
        <MyCocktailContext.Provider value= {{ cocktail, setCocktail }}>
          <MyHeaderThemeContext.Provider value= {{ headerTheme, setHeaderTheme }}>
            <BrowserRouter>

              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/cocktail" component={Cocktail} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
              <Footer/>

            </BrowserRouter>
          </MyHeaderThemeContext.Provider>
        </MyCocktailContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
