
import styled from 'styled-components'

export const IngredientWrapper = styled.div`
  background-color : ${({ingredient} : {ingredient: any}) => ingredient?.backgroundColor};
  display: inline-block;
  width: 50%;
  height : 100%;

`;