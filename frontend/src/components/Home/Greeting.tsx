import React from 'react';
import { MainHome, MainWrapper } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';
import { MainStyle } from '../../styles/global-styles';

export const Greeting = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
          <MainHome>
          </MainHome>
      </>
    </ThemeProvider>
   
  )
}