import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, Section, MainLineContent, FirstTitle, SecondTitle } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import {Iingredient, BASE_URL} from '../../utils/db';
import {IngredientWrapper} from '../../styles/ingredient'

export const Ingredient = () => {
  const [randomIngredient, setRandomIngredient] = useState<Iingredient>()

  useEffect(() => {
    async function fetchIngredient() {
      await fetch(`${BASE_URL}/data/ingredients.json`)
      .then((response) => response.json())
      .then( async (response) => {
        setRandomIngredient(response.data[0])
        // console.log(response.data[0])
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${response.data[0].name.toLowerCase()}`)
        .then((response) => response.json())
        .then((response) => {
          setRandomIngredient((prevState:any)  => ({...prevState , "description" :  response?.ingredients[0].strDescription}))
        })
      })
      
    }

    fetchIngredient()
  }, [])

  return (
    <ThemeProvider theme={lightTheme} >
      <>
        <Section>
          <MainContentLineWrapper>
            <MainLineContent style={{display:'flex'}}>
              <img src={`${process.env.PUBLIC_URL}/images/vodka.jpg`} alt="" style={{width: '50%', height: '100%', overflow : 'hidden', objectFit: 'cover'}} />
              <IngredientWrapper ingredient={randomIngredient}>
                <div style={{padding :"5%", fontSize:"30px"}}>{randomIngredient?.name}</div>
                <div style={{padding :"5%", height : '80%', overflowY:"scroll"}}>{randomIngredient?.description}</div>
              </IngredientWrapper>
            </MainLineContent>
          </MainContentLineWrapper>
        </Section>
      </>
    </ThemeProvider>
   
  )
}