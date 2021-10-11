
import styled from 'styled-components'

export const IngredientWrapper = styled.div`
  background-color : ${({ingredient} : {ingredient: any}) => ingredient?.backgroundColor};
  color : ${({ingredient} : {ingredient: any}) => ingredient?.fontColor};
  display: inline-block;
  width: 50%;
  height : 100%;

  ${({theme}: {theme: any}) => theme.tablet`
    width: 100%;
    height : 100%;
    background-color: transparent;
    text-shadow: 2px 1px 1px 1px white;
    font-size : 18px;
    line-height: 22px;
    font-weight : 600;
  `}
`;


export const IngredientImage =styled.img`
  width: 50%;
  height: 100%;
  overflow : hidden;
  object-fit: cover;
  
  ${({theme}: {theme: any}) => theme.tablet`
    width: 100%;
    height : 100%;
    opacity : 0.3;
    position:absolute;
    top:0;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );
  `}

`


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