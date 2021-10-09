import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, Section, MainContent, MainGrid, FirstLine, SecondLine,Empty, MainImage, Description } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme} from '../../styles/theme';
import {BASE_URL} from '../../utils/db';



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
      await fetch(`${BASE_URL}/data/greeting.json`)
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
        <Section id="greetingSection">
          <MainContentLineWrapper>
            <MainContent className="container">
               <MainGrid>
                <Empty></Empty>
                <FirstLine>{data?.title.first_line}</FirstLine>
                <SecondLine>{data?.title.second_line}</SecondLine>
                <MainImage src='/images/main_autumn.jpg' alt="aa"></MainImage>
                <Description>
                  <p>{data?.description}</p>
                </Description>

               </MainGrid>
            </MainContent>
          </MainContentLineWrapper>
        </Section>
      </>
    </ThemeProvider>
   
  )
}