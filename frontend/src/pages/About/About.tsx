import React,{useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper } from '../../styles/home';
import AboutItem from '../../components/AboutItem';
import {BASE_URL, IAbout} from '../../utils/db';
import {useHeaderThemeContext} from '../../utils/headerContext'
import { lightTheme } from '../../styles/theme';
import {useCocktailContext} from '../../utils/cocktailContext';
import { ThemeProvider } from 'styled-components';
import { AboutMainImg , AboutIntro, AboutLeftFeatures, AboutRightFeatures} from './style';

export const About = () => {
  const [abouts, setAbouts] = useState<IAbout[] | []>([])
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()
  const {cocktail, setCocktail } = useCocktailContext()
  useEffect(()=> {
    async function fetchAboutItems() {
      await fetch(`${process.env.PUBLIC_URL}/data/abouts.json`)
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
            <AboutMainImg src={`${process.env.PUBLIC_URL}/images/daco.png`} alt="about" />
            <AboutIntro >FooBar offers<br/> fun ways of<br/> enjoing<br/> cocktails.</AboutIntro>
          </MainContentLineWrapper>
        </Section>
        <Section>
          <MainContentLineWrapper style={{display:"flex", flexDirection:"column", justifyContent:"center", paddingLeft:"30px", paddingRight:"30px"}}>
            <AboutLeftFeatures >
              <AboutItem about={abouts? abouts[0]: undefined} ></AboutItem>
              <AboutItem about={abouts? abouts[1]: undefined} ></AboutItem>
            </AboutLeftFeatures>
            <AboutRightFeatures style={{display:"flex", alignSelf:"flex-end"}}>
              <AboutItem about={abouts? abouts[2]: undefined} ></AboutItem>
              <AboutItem about={abouts? abouts[3]: undefined} ></AboutItem>
            </AboutRightFeatures>
          </MainContentLineWrapper>
        </Section>
      </MainWrapper>
      </>
    </ThemeProvider>
  )
}
