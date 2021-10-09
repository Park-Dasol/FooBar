
import styled from 'styled-components'

// section들 담고 있는 wrapper
export const RecipeWrapper = styled.div`
  width: 20vw;
  height: auto;
  // margin-left : 35px;
  // margin-right : 35px;
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