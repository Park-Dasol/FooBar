import React , {VFC} from "react";
import {RecipeWrapper, RandomRecipeImg, RandomRecipeTitle, RandomRecipeDescription, RandomRecipeLink} from '../../styles/randomrecipe';
import {IDrink} from '../../utils/db';
interface Props {
  randomRecipe: IDrink
}

const RandomRecipe :VFC<Props>= ({randomRecipe}) => {

  return (
    <RecipeWrapper>
      <RandomRecipeImg src={randomRecipe.strDrinkThumb} alt="" />
      <hr />
      <RandomRecipeTitle>{randomRecipe.strDrink}</RandomRecipeTitle>
      <hr />
      <RandomRecipeDescription>{randomRecipe.strInstructions}</RandomRecipeDescription>
    </RecipeWrapper>
  )
}

export default RandomRecipe;