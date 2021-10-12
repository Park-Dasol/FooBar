import React,{useCallback, useEffect, useState} from 'react';
import { Section,MainContentLineWrapper,  MainWrapper , MainContent} from '../../styles/home';

import SearchBox from '../../components/SearchBox'
import {useCocktailContext} from '../../utils/cocktailContext';
import {IDrink, BASE_URL} from '../../utils/db'
import {useHeaderThemeContext} from '../../utils/headerContext'
import { lightTheme } from '../../styles/theme';
import { SearchResultWrapper, DetailImgDescWrap, DetailCocktailImg, DetailTitle, DetailWrapper,DetailDescription , SearchBgImg} from './style';
import Loading from '../../components/Loading';
import { ThemeProvider } from 'styled-components';
export const Cocktail = () => {
  
  const {cocktail, setCocktail } = useCocktailContext()
  const [cocktailDetail, setCocktailDetail] = useState<IDrink |undefined>()
  const [ingredient, setIngredient] = useState<string>('')
  const [cocktailList, setCocktailList] = useState<any[]>([]);
  const [autoComplete, setAutoComplete] =  useState<any[]>([]);
  const [showDetail, setShowDetail] =  useState<boolean>(false);
  const [inputValue, setInputValue] =  useState<string>('');
  const { headerTheme, setHeaderTheme } = useHeaderThemeContext()
  
  const [isLoading, setIsLoading] =  useState<boolean>(true);


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
    if (cocktailDetail?.strDrinkThumb !==null) {
      setIsLoading(false)
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
      setIsLoading(true)
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


  return (
    <ThemeProvider theme={lightTheme}>
    <>
      <MainWrapper>
      
        {isLoading ?   <Loading/> : (
         <Section>
          <MainContentLineWrapper style={{display:'flex', flexDirection:"row"}}>
            <SearchBgImg src={`${process.env.PUBLIC_URL}/images/about.png`} alt="search" />
            <SearchBox onChangeSearch={onChangeSearch} onSubmitForm={onSubmitForm} inputValue={inputValue}  autoComplete={autoComplete} setInputValue={setInputValue} setCocktailDetail={setCocktailDetail}/>
          </MainContentLineWrapper>
        </Section>
        )}
        <Section style={{display: showDetail? 'flex' : 'none'}} id='section2'>
          <MainContentLineWrapper style={{display:'flex',  flexDirection:'column',justifyContent:'center',}}>
          <SearchResultWrapper>
            <div style={{fontFamily:"PlayfairDisplayMedium", height: '20%', fontSize:"60px", paddingLeft:"10%",display: "table"}}><span style={{display: "table-cell",verticalAlign:"middle"}}>{cocktailDetail?.strDrink}</span></div>
            <DetailImgDescWrap >
              <DetailCocktailImg src={cocktailDetail?.strDrinkThumb} alt="SearchImg" />
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
            </DetailImgDescWrap>  
            </SearchResultWrapper>      
          </MainContentLineWrapper>
        </Section>
      </MainWrapper>
      </>
    </ThemeProvider>
  )
}