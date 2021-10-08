import React, { useEffect, useState } from 'react';
import { MenuButton, LogoButton} from '../../styles/button';
import { MyHeader, Grid, Item} from '../../styles/header';
import {Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import {useHeaderThemeContext} from '../../utils/headerContext'
import { ThemeProvider } from 'styled-components';

export const Header = () => {
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()

  return (
    
      <ThemeProvider theme={headerTheme} >
      <MyHeader>
        <Grid>
          <Item>
            <Link to="/about">
            <MenuButton>ABOUT</MenuButton>
            </Link>
            <Link to="/cocktail">
              <MenuButton>COCKTAIL</MenuButton>
            </Link>
            <Link to="/contact">
            <MenuButton>CONTACT</MenuButton>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <LogoButton>FooBar</LogoButton>
            </Link>
          </Item>
          <Item>
          </Item>
        </Grid>
      </MyHeader>
    </ThemeProvider>
   
  )
}
