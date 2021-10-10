import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper , MainContent} from '../../styles/home';

import SearchBox from '../../components/SearchBox'
import {useCocktailContext} from '../../utils/cocktailContext';
import {IDrink, BASE_URL, ICocktail} from '../../utils/db'
import {ArchedCocktail} from '../../styles/cocktail'
import {useHeaderThemeContext} from '../../utils/headerContext'
import { lightTheme } from '../../styles/theme';
import { DetailTitle, DetailWrapper,DetailDescription,SearchBoxWrapper } from './style';


export const Cocktail = () => {
  
  const {cocktail, setCocktail } = useCocktailContext()
  const [cocktailDetail, setCocktailDetail] = useState<IDrink |undefined>()
  const [ingredient, setIngredient] = useState<string>('')
  const [cocktailList, setCocktailList] = useState<any[]>([]);
  const [autoComplete, setAutoComplete] =  useState<any[]>([]);
  const [showDetail, setShowDetail] =  useState<boolean>(false);
  const [inputValue, setInputValue] =  useState<string>('');
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()
  


  useEffect(()=> {
    async function fetchCocktailList() {
      await fetch(`${BASE_URL}/data/cocktails.json`)
      .then((response) => response.json())
      .then((response) => {
        setCocktailList(response.data)
      })
    }
      fetchCocktailList()
      setHeaderTheme(lightTheme)
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
    window.scrollTo(0, 0);
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
  }, [cocktail, inputValue, autoComplete])

  const onChangeSearch = useCallback( async (e) => {
    setInputValue(e.target.value)
    const autoCompleteList = cocktailList?.filter(cocktail => {
      const regex = new RegExp(e.target.value, 'gi')
      return cocktail.name.match(regex)
    })
    setAutoComplete(autoCompleteList)

    if(!e.target.value) {
      setAutoComplete([])
    }
  }, [cocktailList, inputValue])

  const onFocus = useCallback(()=> {
    setCocktail(undefined)
  }, [])

  return (
      <MainWrapper>
         <Section>
          <MainContentLineWrapper style={{display:'flex', flexDirection:"row",position:"relative"}}>
            <img src={`${process.env.PUBLIC_URL}/images/about.png`} alt="search" style={{height:'100%', objectFit:'contain', bottom: 0, position: 'relative'}}/>
            {/* <div style={{width: '60%', height:"100%", flexDirection:"column", position:"absolute", top:"50px", right:"0"}}> */}
            {/* <SearchBoxWrapper className=""> */}
              {/* <SearchBox onChangeSearch={onChangeSearch} onSubmitForm={onSubmitForm} inputValue={inputValue} onFocus={onFocus} autoComplete={autoComplete} setInputValue={setInputValue} setCocktailDetail={setCocktailDetail}/> */}
              <SearchBox onChangeSearch={onChangeSearch} onSubmitForm={onSubmitForm} inputValue={inputValue}  autoComplete={autoComplete} setInputValue={setInputValue} setCocktailDetail={setCocktailDetail}/>
            {/* </SearchBoxWrapper> */}
          </MainContentLineWrapper>
        </Section>
        <Section style={{display: showDetail? 'flex' : 'none'}} id='section2'>
          <MainContentLineWrapper style={{display:'flex',  flexDirection:'column',justifyContent:'center',}}>
          <MainContent style={{height:"90%", display:'flex',  flexDirection:'column',justifyContent:'center'}}>
            <div style={{height: '20%', fontSize:"60px", paddingLeft:"10%",display: "table"}}><span style={{display: "table-cell",verticalAlign:"middle"}}>{cocktailDetail?.strDrink}</span></div>
            <div style={{display:'flex', height:"70%"}}>
              <ArchedCocktail src={cocktailDetail?.strDrinkThumb} alt="" />
              <div style={{display:'flex', flexDirection:"column", justifyContent:"center"}}>
                <DetailWrapper>
                  <DetailTitle >Category </DetailTitle>
                  <DetailDescription>{cocktailDetail?.strCategory}</DetailDescription>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle >Alcoholic </DetailTitle>
                  <DetailDescription>{cocktailDetail?.strAlcoholic}</DetailDescription>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>IBA Category </DetailTitle>
                  <DetailDescription>{cocktailDetail?.strIBA}</DetailDescription>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Glass</DetailTitle> 
                  <DetailDescription>{cocktailDetail?.strGlass}</DetailDescription>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle>Ingredient </DetailTitle>
                  <DetailDescription>{ingredient}</DetailDescription>
                </DetailWrapper>
                <DetailWrapper>
                  <DetailTitle >Recipe </DetailTitle>
                  <DetailDescription>{cocktailDetail?.strInstructions}</DetailDescription>
                </DetailWrapper>
              </div>
            </div>  
            </MainContent>      
          </MainContentLineWrapper>
        </Section>
      </MainWrapper>
  )
}
