import React, { useEffect, useState } from 'react';
import { MyHeader, Grid, Item, MenuButton, LogoButton} from './style';
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
            <Link to="/about" style={linkStyle}>
            <MenuButton >ABOUT</MenuButton>
            </Link>
            <Link to="/cocktail" style={linkStyle}>
              <MenuButton>COCKTAIL</MenuButton>
            </Link>
            <Link to="/contact" style={linkStyle}>
            <MenuButton>CONTACT</MenuButton>
            </Link>
          </Item>
          <Item>
            <Link to="/" style={linkStyle}>
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


const linkStyle = {
  display:"flex", 
  justifyContent:"center",  
  textDecoration:"none"
};