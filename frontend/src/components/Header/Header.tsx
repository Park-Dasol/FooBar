import React from 'react';

import { Button } from '../Button/Button';
import { MyHeader, Grid, Item} from '../../styles/header';
import './header.css';

interface HeaderProps {
  user?: {};
  backgroundMode?: 'dark' | 'bright';
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount, backgroundMode}: HeaderProps) => (
  <MyHeader backgroundMode={'bright'}>
    <Grid>
      <Item>
        <Button size="small" onClick={onLogout} label="ABOUT" backgroundMode={'bright'}/>
        <Button size="small" onClick={onLogout} label="COCKTAILS" backgroundMode={'bright'}/>
        <Button size="small" onClick={onLogout} label="CONTACT" backgroundMode={'bright'}/>
      </Item>
      <Item>
        <Button size="large" onClick={onLogout} label="FooBar" backgroundMode={'bright'}/>
      </Item>
      <Item>

      </Item>
    </Grid>
  </MyHeader>
);
