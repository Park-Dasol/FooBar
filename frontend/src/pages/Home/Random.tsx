import React , { useState, useEffect  } from 'react';
import { MainHome, MainContentWrapper, MainContent } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, whiteTheme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global-styles';
import {IDrink} from '../../typings/db';
import RandomRecipe from '../../components/RandomRecipe';
export const Random = () => {
  const [randomRecipe, setRandomRecipe] = useState<IDrink[] | []>([])

  useEffect(() => {
    async function fetchRecipe() {
      await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((response) => {
        setRandomRecipe(prevArary => [...prevArary, response.drinks[0]])
      })
    }
    if (randomRecipe.length < 3) {
      fetchRecipe()
    }
  }, [randomRecipe])

  console.log(randomRecipe)
  return (
    <ThemeProvider theme={whiteTheme}>
      <>
        <MainHome>
          <MainContentWrapper>
           <MainContent>
            <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
              <div style={{fontSize: '40px', marginTop:'20px'}}>Perfect Sip for Today</div>
              <div style={{fontSize: '25px', marginTop:'20px'}}>This is our recommendations for you</div>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                {randomRecipe?.map((r)=> <RandomRecipe randomRecipe={r}/>)}
            </div>
 
           </MainContent>
          </MainContentWrapper>
        </MainHome>
      </>
    </ThemeProvider>
  )
}