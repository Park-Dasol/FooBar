import React from 'react';
import { MainWrapper } from '../../styles/home';
import { Greeting } from './Greeting'
import { Quote } from './Quote'
import { Random } from './Random'
import { Ingredient } from './Ingredient';
export const Home = () => {
  return (
      <MainWrapper>
        <Greeting/>
        <Random/>
        <Ingredient/>
        <Quote/>
      </MainWrapper>

  )
}
