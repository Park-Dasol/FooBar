import React,{useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper } from '../../styles/home';

import SearchBox from '../../components/SearchBox'
import {useCocktailContext} from '../../utils/cocktailContext';
import {IDrink} from '../../utils/db'
import {ArchedCocktail} from '../../styles/images'


export const Cocktail = () => {
  
  const { cocktail, setCocktail } = useCocktailContext()
  const [cocktailDetail, setCocktailDetail] = useState<IDrink>()
  const [ingredient, setIngredient] = useState<string>('')

  useEffect(() => {
    async function fetchCocktail() {
      await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setCocktailDetail(response.drinks[0])
        for (var i = 1; i <=15; i++) {
          if (response.drinks[0]['strIngredient' + i]) {
            setIngredient(prevState =>  ((prevState ? prevState + ', ' : '') +  response.drinks[0]['strIngredient' + i] + ' ' + response.drinks[0]['strMeasure' + i]))
          } 
        }
      })
    }
    if (cocktail) {
      fetchCocktail()
    }
  }, [cocktail]);
  
  return (
      <MainWrapper>
         <Section>
          <MainContentLineWrapper style={{display:'flex', flexDirection:"row"}}>
            <img src={`${process.env.PUBLIC_URL}/images/searchCut.png`} alt="search" style={{height:'100%', objectFit:'contain', bottom: 0, position: 'relative'}}/>
            <SearchBox />
          </MainContentLineWrapper>
        </Section>
        <Section style={{display: cocktail? 'flex' : 'none'}}>
          <MainContentLineWrapper style={{display:'flex',  flexDirection:'column',justifyContent:'center'}}>
            <div style={{height: '20%', fontSize:"60px", paddingLeft:"10%"}}>{cocktailDetail?.strDrink}</div>
            <div style={{display:'flex', height:"70%"}}>
              <ArchedCocktail src={cocktailDetail?.strDrinkThumb} alt="" />
              <div>
                <div>
                  <div style={{fontWeight:700}}>Category </div>
                  <div>{cocktailDetail?.strCategory}</div>
                </div>
                <div>
                  <div style={{fontWeight:700}}>Alcoholic </div>
                  <div>{cocktailDetail?.strAlcoholic}</div>
                </div>
                <div>
                  <div style={{fontWeight:700}}>IBA Category </div>
                  <div>{cocktailDetail?.strIBA}</div>
                </div>
                <div>
                  <div style={{fontWeight:700}}>Glass</div> 
                  <div>{cocktailDetail?.strGlass}</div>
                </div>
                <div>
                  <div style={{fontWeight:700}}>Ingredient </div>
                  <div>{ingredient}</div>
                </div>
                <div>
                  <div style={{fontWeight:700}}>Recipe </div>
                  <div>{cocktailDetail?.strInstructions}</div>
                </div>
              </div>
            </div>        
          </MainContentLineWrapper>
        </Section>
      </MainWrapper>
  )
}
