import React from 'react';
import { Section,MainContentLineWrapper,  MainWrapper } from '../../styles/home';
import SearchBox from '../../components/SearchBox'
import {useCocktailContext} from '../../utils/cocktailContext';

export const Search = () => {

  const { cocktail, setCocktail } = useCocktailContext()
  console.log(cocktail)

  return (

        <Section>
          <MainContentLineWrapper style={{display:'flex', flexDirection:"row"}}>
            <img src={`${process.env.PUBLIC_URL}/images/searchCut.png`} alt="search" style={{height:'100%', objectFit:'contain', bottom: 0, position: 'relative'}}/>
            <SearchBox />
          </MainContentLineWrapper>
        </Section>

  )
}
