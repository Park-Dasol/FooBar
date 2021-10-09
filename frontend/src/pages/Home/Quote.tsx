import React , {useEffect, useState}from 'react';
import { Section, MainContent } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/theme';
import {BASE_URL, IQuote} from '../../utils/db';
import {GiDiamonds} from 'react-icons/gi';

export const Quote = () => {
  const [quote, setQuote] = useState<IQuote>()

  useEffect(() => {
    async function fetchQuote() {
      await fetch(`${BASE_URL}/data/quotes.json`)
      .then((response) => response.json())
      .then((response) => {
        const index = Math.floor(Math.random() * 20);
        setQuote(response.data[index])
      })
    }
    fetchQuote()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Section>
          <MainContent style={{flexDirection:"column", justifyContent:"center", width:"60%"}}>
            <div style={{fontSize:"30px", marginBottom:"50px"}}><GiDiamonds/></div>

            <div style={{fontSize:"75px", textAlign:"center", width:"100%"}}>"{quote?.content}"</div>
            <div style={{fontSize:"30px", marginTop:"60px", alignSelf:"flex-end"}}>- {quote?.person}</div>
          </MainContent>
        </Section>
      </>
    </ThemeProvider>
   
  )
}