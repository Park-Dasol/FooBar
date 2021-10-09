
import styled from 'styled-components'

export const IngredientWrapper = styled.div`
  background-color : ${({ingredient} : {ingredient: any}) => ingredient?.backgroundColor};
  color : ${({ingredient} : {ingredient: any}) => ingredient?.fontColor};
  display: inline-block;
  width: 50%;
  height : 100%;

`;