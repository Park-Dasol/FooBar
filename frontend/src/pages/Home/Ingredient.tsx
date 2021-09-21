import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, MainHome, MainLineContent, FirstTitle, SecondTitle } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';



export const Ingredient = () => {

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <MainHome>
          <MainContentLineWrapper>
            <MainLineContent>

            </MainLineContent>
          </MainContentLineWrapper>
        </MainHome>
      </>
    </ThemeProvider>
   
  )
}