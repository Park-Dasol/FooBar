import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, MainHome, MainContent, FirstTitle, SecondTitle } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';
import { forEachTrailingCommentRange } from 'typescript';
import {ArchedImage} from '../../styles/images';

type greetType = {
  id: number,
  title : {
    first_line : string,
    second_line: string,
  },
  img : string,
  description: string,
};


export const Greeting = () => {
  const [data, setData] = useState<greetType | null>(null)

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((response) => {
        const now : number = new Date().getMonth();
        const month : number= Math.floor(now / 3) + 1
        response.data.forEach((item:any) => {
          if (item.id === month) {setData(item)};
        })
      })
    }
    fetchData()
    console.log(data)
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <MainHome>
          <MainContentLineWrapper>
            <MainContent>
              <FirstTitle>{data?.title.first_line}</FirstTitle>
              <SecondTitle>{data?.title.second_line}</SecondTitle>
              <ArchedImage src='/images/main_autumn.jpg' alt="aa" />
              <p>{data?.description}</p>
              
            </MainContent>
          </MainContentLineWrapper>
        </MainHome>
      </>
    </ThemeProvider>
   
  )
}