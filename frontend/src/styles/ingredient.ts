
import styled from 'styled-components'

export const IngredientWrapper = styled.div`
  background-color : ${({ingredient} : {ingredient: any}) => ingredient?.backgroundColor};
  color : ${({ingredient} : {ingredient: any}) => ingredient?.fontColor};
  display: inline-block;
  width: 50%;
  height : 100%;
`;


export const IngredientDescription = styled.div`
  padding :10%;
  max-height : 80%;
  overflow-y:auto;
  // scroll style
  &::-webkit-scrollbar {
    background-color:transparent;
    width:10px
  }
  &::-webkit-scrollbar-thumb {
      background-color:#f7ede2;
      border-radius:16px;
      border:2px solid #f4f4f4;
  }
  &::-webkit-scrollbar-thumb:hover {
      background-color:#adb5bd;
  }

`;