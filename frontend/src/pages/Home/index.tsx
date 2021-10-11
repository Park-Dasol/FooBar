import React, {useState, useEffect, useCallback} from 'react';
import { MainWrapper } from '../../styles/home';
import { Greeting } from './Greeting'
import { Quote } from './Quote'
import { Random } from './Random'
import { Ingredient } from './Ingredient';
import {useHeaderThemeContext} from '../../utils/headerContext'
import { darkTheme, lightTheme, whiteTheme } from '../../styles/theme';
import {useCocktailContext} from '../../utils/cocktailContext';

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()
  const {cocktail, setCocktail } = useCocktailContext()

  function logit() {
    setScrollY(window.pageYOffset);
    // console.log(scrollY, window.innerHeight) 
  }

  useEffect(() => {
    function watchScroll() {
      let fixVariable = 1.1;
      if (window.innerWidth <= 768) {
        fixVariable = 1;
      }
      window.addEventListener("scroll", logit);
      if (scrollY < window.innerHeight*fixVariable * 1) {
        setHeaderTheme(lightTheme)
      } else if (scrollY < window.innerHeight *2 * fixVariable) {
        setHeaderTheme(whiteTheme)
      } else if (scrollY < window.innerHeight *3* fixVariable) {
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


  useEffect(()=> {
    setCocktail(undefined)
    window.scrollTo(0, 0);
  }, [])
  

  return (
      <MainWrapper>
        <Greeting/>
        <Random/>
        <Ingredient/>
        <Quote/>
      </MainWrapper>

  )
}
