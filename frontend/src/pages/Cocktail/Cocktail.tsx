import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper } from '../../styles/home';

import SearchBox from '../../components/SearchBox'
import {useCocktailContext} from '../../utils/cocktailContext';
import {IDrink, BASE_URL} from '../../utils/db'
import {ArchedCocktail} from '../../styles/images'
import { NONAME } from 'dns';



export const Cocktail = () => {
  
  const { cocktail, setCocktail } = useCocktailContext()
  const [cocktailDetail, setCocktailDetail] = useState<IDrink>()
  const [ingredient, setIngredient] = useState<string>('')
  const [cocktailList, setCocktailList] = useState<any[]>([]);
  const [autoComplete, setAutoComplete] =  useState<any[]>([]);

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

  useEffect(()=> {
    async function fetchCocktailList() {
      await fetch(`${BASE_URL}/data/cocktails.json`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        setCocktailList(response.data)
      })
    }
      fetchCocktailList()
 
  }, [])

  const onSubmitForm = useCallback((e)=> {
    e.preventDefault()
    setCocktail('11728')
  }, [])

  const getCokctail = useCallback((e)=> {
    console.log(e.target.textContent)
    // fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.textContent}`)
      .then((response) => response.json())
      .then((response) => {
        console.log('hi')
      }
        // console.log(response.drinks)
)
  }, [])

  const onChangeSearch = useCallback( async (e) => {
    console.log(e.target.value)
    // console.log(cocktailList)
    const autoCompleteList = cocktailList?.filter(cocktail => {
      const regex = new RegExp(e.target.value, 'gi')
      // console.log(cocktail)
      return cocktail.match(regex)
    })
    console.log(autoCompleteList)
    setAutoComplete(autoCompleteList)
  }, [cocktailList])

  // console.log('aa', cocktailList)

  
  return (
      <MainWrapper>
         <Section>
          <MainContentLineWrapper style={{display:'flex', flexDirection:"row"}}>
            <img src={`${process.env.PUBLIC_URL}/images/searchCut.png`} alt="search" style={{height:'100%', objectFit:'contain', bottom: 0, position: 'relative'}}/>
            <div style={{width: '60%', height:"100%", display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
              <SearchBox onChangeSearch={onChangeSearch}/>
              <div style={{display: autoComplete? 'static' : 'none', width: '100%', maxHeight:'30%', overflowY:'scroll'}}>
                {autoComplete.map(recom => 
                  (<li onClick={getCokctail} style={{listStyle:'none', height:"20px", cursor:"pointer", marginTop:"3px",marginBottom:"3px"}}>
                    <span style={{ backgroundColor:"#FADDA2", borderRadius:"50px"}}>{recom}</span>
                  </li>)
                )}
              </div>

            </div>
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
