import React , {useEffect, useState}from 'react';
import { Section } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/theme';
import {BASE_URL, IQuote} from '../../utils/db';
import {GiDiamonds} from 'react-icons/gi';
import { QuoteContent } from '../../styles/quote';
export const Quote = () => {
  const [quote, setQuote] = useState<IQuote>()

  useEffect(() => {
    async function fetchQuote() {
      await fetch(`${process.env.PUBLIC_URL}/data/quotes.json`)
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
          <QuoteContent >
            <div style={{fontSize:"30px", marginBottom:"50px"}}><GiDiamonds/></div>
            <div >"{quote?.content}"</div>
            <div style={{fontSize:"30px", marginTop:"60px", alignSelf:"flex-end"}}>- {quote?.person}</div>
          </QuoteContent>
        </Section>
      </>
    </ThemeProvider>
   
  )
}