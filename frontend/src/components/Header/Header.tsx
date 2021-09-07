import React from 'react';
import { MenuButton, LogoButton} from '../../styles/button';
import { MyHeader, Grid, Item} from '../../styles/header';


export const Header = () => {
  return (
  <MyHeader>
    <Grid>
      <Item>
        <MenuButton>ABOUT</MenuButton>
        <MenuButton>COCKTAIL</MenuButton>
        <MenuButton>CONTACT</MenuButton>
      </Item>
      <Item>
        <LogoButton>FooBar</LogoButton>
      </Item>
      <Item>

      </Item>
    </Grid>
  </MyHeader>
  )
}
