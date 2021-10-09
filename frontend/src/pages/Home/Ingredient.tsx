import React , { useState, useEffect  } from 'react';
import { MainContentLineWrapper, Section, MainLineContent} from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import {Iingredient, BASE_URL} from '../../utils/db';
import {IngredientWrapper} from '../../styles/ingredient'

export const Ingredient = () => {
  const [randomIngredient, setRandomIngredient] = useState<Iingredient>()

  useEffect(() => {
    async function fetchIngredient() {
      let index = 4
      await fetch(`${BASE_URL}/data/ingredients.json`)
      .then((response) => response.json())
      .then( async (response) => {
        setRandomIngredient(response.data[index])
        // console.log(response.data[0])
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${response.data[index].name.toLowerCase()}`)
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
          <MainContentLineWrapper style={{display:"flex", alignItems:"center"}}>
            <MainLineContent style={{display:'flex'}}>
              <img src={`${process.env.PUBLIC_URL}/images/${randomIngredient?.name.toLowerCase()}.jpg`} alt="" style={{width: '50%', height: '100%', overflow : 'hidden', objectFit: 'cover'}} />
              <IngredientWrapper ingredient={randomIngredient} style={{padding :"6%"}}>
                <div style={{margin :"10% 0 3% 5%", fontSize:"60px", height:"10%",}}>{randomIngredient?.name}</div>
                <div style={{padding :"10%", maxHeight : '80%', overflowY:"scroll"}}>{randomIngredient?.description}</div>
              </IngredientWrapper>
            </MainLineContent>
          </MainContentLineWrapper>
        </Section>
      </>
    </ThemeProvider>
   
  )
}