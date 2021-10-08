import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper } from '../../styles/home';

import SearchBox from '../../components/SearchBox'
import {useCocktailContext} from '../../utils/cocktailContext';
import {IDrink, BASE_URL, ICocktail} from '../../utils/db'
import {ArchedCocktail} from '../../styles/images'



export const Cocktail = () => {
  
  const {cocktail, setCocktail } = useCocktailContext()
  const [cocktailDetail, setCocktailDetail] = useState<IDrink |undefined>()
  const [ingredient, setIngredient] = useState<string>('')
  const [cocktailList, setCocktailList] = useState<any[]>([]);
  const [autoComplete, setAutoComplete] =  useState<any[]>([]);
  const [showDetail, setShowDetail] =  useState<boolean>(false);
  const [inputValue, setInputValue] =  useState<string>('');

  useEffect(()=> {
    async function fetchCocktailList() {
      await fetch(`${BASE_URL}/data/cocktails.json`)
      .then((response) => response.json())
      .then((response) => {
        setCocktailList(response.data)
      })
    }
      fetchCocktailList()
  }, [])

  useEffect(()=> {
    if (!cocktailDetail) {
      setShowDetail(false)
    }
  }, [cocktailDetail])

  useEffect(()=> {
    if(cocktail) {
    fetchCocktail()
    setShowDetail(true)
    }
  }, [])

  async function fetchCocktail() {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail?.id}`)
    .then((response) => response.json())
    .then((response) => {
      setCocktailDetail(response.drinks[0])
      for (var i = 1; i <=15; i++) {
        if (response.drinks[0]['strIngredient' + i]) {
          setIngredient(prevState =>  ((prevState ? prevState + ', ' : '') +  response.drinks[0]['strIngredient' + i] + ' ' + response.drinks[0]['strMeasure' + i]))
        } 
      }
      const section = document.getElementById('section2')
      window.scrollTo({
        top: section?.offsetTop,
        behavior: 'smooth',
      })
    })
  }

  const onSubmitForm = useCallback((e)=> {
    e.preventDefault()
    setShowDetail(false)
    setInputValue('')
    setAutoComplete([])
    if (cocktail) {
      fetchCocktail()
      setShowDetail(true)
    }
  }, [cocktail])

  const onChangeSearch = useCallback( async (e) => {
    setInputValue(e.target.value)
    const autoCompleteList = cocktailList?.filter(cocktail => {
      const regex = new RegExp(e.target.value, 'gi')
      return cocktail.name.match(regex)
    })
    setAutoComplete(autoCompleteList)
  }, [cocktailList])

  const onFocus = useCallback(()=> {
    setCocktail(undefined)
  }, [])

  return (
      <MainWrapper>
         <Section id={'section1'}>
          <MainContentLineWrapper style={{display:'flex', flexDirection:"row"}}>
            <img src={`${process.env.PUBLIC_URL}/images/searchCut.png`} alt="search" style={{height:'100%', objectFit:'contain', bottom: 0, position: 'relative'}}/>
            <div style={{width: '60%', height:"100%", display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
              <SearchBox onChangeSearch={onChangeSearch} onSubmitForm={onSubmitForm} inputValue={inputValue} onFocus={onFocus}/>
              <div style={{display: autoComplete? 'static' : 'none', width: '100%', maxHeight:'30%', overflowY:'scroll'}}>
                {autoComplete.map(recom => 
                  (<li onClick={()=> (setCocktail({id:parseInt(recom.id), name:recom.name}), setInputValue(recom.name), setCocktailDetail(undefined))} key={recom.id} style={{listStyle:'none', height:"20px", cursor:"pointer", marginTop:"3px",marginBottom:"3px"}}>
                    <span style={{ backgroundColor:"#FADDA2", borderRadius:"50px"}} data-id={parseInt(recom.id)}>{recom.name}</span>
                  </li>)
                )}
              </div>

            </div>
          </MainContentLineWrapper>
        </Section>
        <Section style={{display: showDetail? 'flex' : 'none'}} id='section2'>
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
