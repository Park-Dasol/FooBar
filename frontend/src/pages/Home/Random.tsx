import React , { useState, useEffect, useCallback  } from 'react';
import { Section, MainContentWrapper, MainContent } from '../../styles/home';
import { ThemeProvider } from 'styled-components';
import { whiteTheme } from '../../styles/theme';
import {IDrink} from '../../utils/db';
import RandomRecipe from '../../components/RandomRecipe';
import {useCocktailContext} from '../../utils/cocktailContext';
import {GiDiamonds} from 'react-icons/gi'


export const Random = () => {
  const [randomRecipe, setRandomRecipe] = useState<IDrink[] | []>([])
  const {cocktail, setCocktail } = useCocktailContext()

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

  const onMoveRecipe = useCallback((r) => {
    setCocktail({id : r.idDrink, name : r.strDrink})
  }, [])

  return (
    <ThemeProvider theme={whiteTheme}>
      <>
        <Section>
          <MainContentWrapper>
           <MainContent style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <div style={{display:'flex', flexDirection:'column', textAlign:'center', margin:"50px"}}>
              <div style={{fontSize: '40px', marginTop:'20px'}}>Perfect Sip for Today</div>
              <div style={{fontSize:"20px", marginTop:"20px"}}><GiDiamonds/></div>
              <div style={{fontSize: '25px', marginTop:'20px', marginBottom:"20px"}}>This is our recommendations for you</div>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent :"space-around", width:"80%"}}>
                {randomRecipe?.map((r)=> <RandomRecipe onMoveRecipe={()=> onMoveRecipe(r)} randomRecipe={r} key={r.idDrink}/>)}
            </div>
           </MainContent>
          </MainContentWrapper>
        </Section>
      </>
    </ThemeProvider>
  )
}