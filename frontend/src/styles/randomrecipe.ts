
import styled from 'styled-components'



// 3개 레시피 담고 있는 div
export const RecipesBox = styled.div`
  display:flex;
  flex-direction:row;
  justify-content :space-around;
  width:80%;
  ${({theme}: {theme: any}) => theme.tablet`
    flex-direction:column;
  `}
`



//1개 레시피 담고 있는 div
export const RecipeWrapper = styled.div`
  width: 20vw;
  height: auto;
  & p, & h3 {
    border-top : 1px solid grey;
  }

  & h3 {
    ${({theme}: {theme: any}) => theme.tablet`
    border : 0;
  `}
  }

  ${({theme}: {theme: any}) => theme.tablet`
    display: flex; 
    width : 100%;
    margin-top : 2%;
    margin-bottom : 2%;
  `}
`;


export const RandomRecipeImg = styled.img`
  width: 100%;
  border-radius: ${({RandomBorder} : {RandomBorder: any}) => RandomBorder};
  background-image: -webkit-linear-gradient(left, #ECD08C 0%, #ECD08C 100%), -webkit-linear-gradient(left, #ECD08C 0%, #ECD08C 100%);
  background-image: -moz-linear-gradient(left, #ECD08C 0%, #ECD08C 100%), -moz-linear-gradient(left, #ECD08C 0%, #ECD08C 100%);
  background-image: -o-linear-gradient(left, #ECD08C 0%, #ECD08C 100%), -o-linear-gradient(left, #ECD08C 0%, #ECD08C 100%);
  background-image: linear-gradient(to right, #ECD08C 0%, #ECD08C 100%), linear-gradient(to right, #ECD08C 0%, #ECD08C 100%);
  object-fit: contain;
  padding : 4px;
  margin-bottom:10px;
  ${({theme}: {theme: any}) => theme.tablet`
    display: flex; 
    width : 30%;
    margin-bottom:0;
  `}

`
// recipe 설명 부분
export const RandomRecipeDescArea = styled.div`
  ${({theme}: {theme: any}) => theme.tablet`
    display: flex; 
    flex-direction : column;
    justify-content:center;
    padding: 0 20px;
  `}
`

export const RandomRecipeTitle = styled.h3`
padding-left: 10px;
padding-right: 10px;
  font-size: 30px;
  padding-top:5px;
  padding-bottom: 5px;
`

export const RandomRecipeDescription = styled.p`
padding : 10px 10px 0px;
line-height: 18px;

//multiline truncate
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;

`
export const RandomRecipeLink = styled.div`


`