import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, MainHome, MainContent } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';
import { forEachTrailingCommentRange } from 'typescript';
import {ArchedImage} from '../../styles/images'

type greetType = typeof initData;

const initData = {
  id: 0,
  title : {
    first_line : "Hot Weather",
    second_line: "Buzz"
  },
  img : '',
  description: 'bbb',
}


export const Greeting = () => {
  const [data, setData] = useState<greetType>(initData)
  useEffect(  () => {
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
              <h1>{data.title.first_line}</h1>
              <h1>{data.title.second_line}</h1>
              <ArchedImage src='/images/main_autumn.jpg' alt="aa" />
              <p>{data.description}</p>
              
            </MainContent>
          </MainContentLineWrapper>
        </MainHome>
      </>
    </ThemeProvider>
   
  )
}