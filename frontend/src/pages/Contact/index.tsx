import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentWrapper,  MainWrapper } from '../../styles/home';
import {BASE_URL, IAbout} from '../../utils/db';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/theme';
import ContactForm from '../../components/ContactForm';


export const Contact = () => {

  
  return (
    <ThemeProvider theme={darkTheme}>
      <>
      <MainWrapper>
         <Section>
          <MainContentWrapper style={{display:"flex"}}>
            <div style={{width:"50%", padding:"3% 5% 10% 5%", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
              <div style={{color:"#6F6C67", lineHeight:"22px"}}>Contact Me!<br/>I’d LOVE to hear from You.<br/>Weather you are curious about Foobar or ME.<br/>I am ready to answer any and all questions.</div>
              <ContactForm/>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/pub.png`} alt="about" style={{height:"80%", objectFit:'contain', alignSelf:"center"}}/>
          </MainContentWrapper>
        </Section>
      </MainWrapper>
      </>
    </ThemeProvider>
     
  )
}
