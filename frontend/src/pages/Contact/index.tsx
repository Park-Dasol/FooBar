import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentWrapper,  MainWrapper, MainContent } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/theme';
import ContactForm from '../../components/ContactForm';
import {useHeaderThemeContext} from '../../utils/headerContext'
import {useCocktailContext} from '../../utils/cocktailContext';
import { ContactBgImg , ContactFormWrapper} from './style';
export const Contact = () => {
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()
  const {cocktail, setCocktail } = useCocktailContext()

  useEffect(()=> {
    setHeaderTheme(darkTheme)
    setCocktail(undefined);
    window.scrollTo(0, 0);
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <>
      <MainWrapper>
         <Section>
          <MainContentWrapper >
            <MainContent style={{display:"flex"}}>
              <ContactFormWrapper>
                <div style={{color:"#dee2e6", lineHeight:"22px", fontFamily:"NotoSerifKRRegular"}}>Contact Me!<br/>I’d LOVE to hear from You.<br/>Weather you are curious about Foobar or ME.<br/>I am ready to answer any and all questions.</div>
                <ContactForm/>
              </ContactFormWrapper>
              <ContactBgImg src={`${process.env.PUBLIC_URL}/images/pub.png`} alt="contact"/>
            </MainContent>
          </MainContentWrapper>
        </Section>
      </MainWrapper>
      </>
    </ThemeProvider>
     
  )
}
