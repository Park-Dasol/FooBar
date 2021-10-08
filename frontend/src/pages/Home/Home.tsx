import React, {useState, useEffect, useCallback} from 'react';
import { MainWrapper } from '../../styles/home';
import { Greeting } from './Greeting'
import { Quote } from './Quote'
import { Random } from './Random'
import { Ingredient } from './Ingredient';
import {useHeaderThemeContext} from '../../utils/headerContext'
import { darkTheme, lightTheme, whiteTheme } from '../../styles/theme';


export const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()


  function logit() {
    setScrollY(window.pageYOffset);
    console.log(scrollY, window.innerHeight) 
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
      if (scrollY < window.innerHeight) {
        setHeaderTheme(lightTheme)
      } else if (scrollY < window.innerHeight *2) {
        setHeaderTheme(whiteTheme)
      } else if (scrollY < window.innerHeight *3) {
        setHeaderTheme(lightTheme)
      } else {   
        setHeaderTheme(darkTheme)
      }
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  

  return (
      <MainWrapper>
        <Greeting/>
        <Random/>
        <Ingredient/>
        <Quote/>
      </MainWrapper>

  )
}
