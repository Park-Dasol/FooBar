import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper } from '../../styles/home';
import AboutItem from '../../components/AboutItem';
import {BASE_URL, IAbout} from '../../utils/db';
import {useHeaderThemeContext} from '../../utils/headerContext'
import { lightTheme } from '../../styles/theme';
import {useCocktailContext} from '../../utils/cocktailContext';
import { ThemeProvider } from 'styled-components';

export const About = () => {
  const [abouts, setAbouts] = useState<IAbout[] | []>([])
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()
  const {cocktail, setCocktail } = useCocktailContext()
  useEffect(()=> {
    async function fetchAboutItems() {
      await fetch(`${BASE_URL}/data/abouts.json`)
      .then((response) => response.json())
      .then((response) => {
        setAbouts(response.data)
      })
    }
    fetchAboutItems()
    setHeaderTheme(lightTheme)
    setCocktail(undefined)
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <ThemeProvider theme={lightTheme}>
      <>
      <MainWrapper>
         <Section>
         <MainContentLineWrapper style={{display:'flex'}}>
            <img src={`${process.env.PUBLIC_URL}/images/daco.png`} alt="about" style={{width:"60%", objectFit:'contain', bottom: 0, position: 'relative'}}/>
            <div style={{fontSize:"70px", margin:"auto", textAlign:"center"}}>FooBar offers<br/> fun ways of<br/> enjoing<br/> cocktails.</div>
          </MainContentLineWrapper>
        </Section>
        <Section>
          <MainContentLineWrapper style={{display:"flex", flexDirection:"column", justifyContent:"center", paddingLeft:"30px", paddingRight:"30px"}}>

            <div style={{display:"flex", alignSelf:"flex-start"}}>
              <AboutItem about={abouts? abouts[0]: undefined} ></AboutItem>
              <AboutItem about={abouts? abouts[1]: undefined} ></AboutItem>

            </div>
            <div style={{display:"flex", alignSelf:"flex-end"}}>
              <AboutItem about={abouts? abouts[2]: undefined} ></AboutItem>
              <AboutItem about={abouts? abouts[3]: undefined} ></AboutItem>

            </div>


          </MainContentLineWrapper>
        </Section>
      </MainWrapper>
      </>
    </ThemeProvider>
  )
}
