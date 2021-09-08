import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, MainHome, MainContent } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';
import mainData from '../../assets/mockdata/main.json';
import { forEachTrailingCommentRange } from 'typescript';

type greetType= {
  id: number;
  title : object;
  img : string;
  description: string;
}

export const Greeting = () => {
  const [data, setData] = useState<any | null>(null);

  const now : number = new Date().getMonth();
  const month = Math.floor(now / 3) + 1

  const fetchData = () =>{
     mainData.seasonGreeting.forEach(greet => {
      if (greet.id !== month) return;
      setData(greet)
    })
  }
  useEffect(  () => {
     fetchData()
     console.log(data)
  }, [data])

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <MainHome>
          <MainContentLineWrapper>
            <MainContent>
              <h1>{data.description}</h1>
            </MainContent>
          </MainContentLineWrapper>
        </MainHome>
      </>
    </ThemeProvider>
   
  )
}