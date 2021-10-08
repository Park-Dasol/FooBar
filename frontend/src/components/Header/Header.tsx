import React from 'react';
import { MenuButton, LogoButton} from '../../styles/button';
import { MyHeader, Grid, Item} from '../../styles/header';
import {Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
  <MyHeader>
    <Grid>
      <Item>
        <Link to="/about">
        <MenuButton>ABOUT</MenuButton>
        </Link>
        <Link to="/cocktail">
          <MenuButton>COCKTAIL</MenuButton>
        </Link>
        <MenuButton>CONTACT</MenuButton>
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
  )
}
