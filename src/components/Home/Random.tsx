import React from 'react';
import { MainHome, MainWrapper } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global-styles';

export const Random = () => {
  return (
    <ThemeProvider theme={whiteTheme}>
      <>
        <MainHome>
        </MainHome>
      </>
    </ThemeProvider>
  )
}