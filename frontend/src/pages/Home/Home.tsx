import React from 'react';
import { MainHome, MainWrapper } from '../../styles/home';
import { Greeting } from './Greeting'
import { Quote } from './Quote'
import { Random } from './Random'

export const Home = () => {
  return (
      <MainWrapper>
        <Greeting/>
        <Random/>
        <Quote/>
      </MainWrapper>

  )
}
