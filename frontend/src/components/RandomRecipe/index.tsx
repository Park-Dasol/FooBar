import React , {VFC} from "react";
import {RecipeWrapper, RandomRecipeImg, RandomRecipeTitle, RandomRecipeDescription, RandomRecipeLink} from '../../styles/randomrecipe';
import {IDrink} from '../../utils/db';
import { Link } from "react-router-dom";
interface Props {
  randomRecipe: IDrink;
  onMoveRecipe: (e:any) => void;
}

const RandomRecipe :VFC<Props>= ({randomRecipe, onMoveRecipe}) => {

  return (
    <RecipeWrapper>
      <RandomRecipeImg src={randomRecipe.strDrinkThumb} alt="" />
      <hr />
      <RandomRecipeTitle>{randomRecipe.strDrink}</RandomRecipeTitle>
      <hr />
      <RandomRecipeDescription>{randomRecipe.strInstructions}</RandomRecipeDescription>
      <Link to="/cocktail" onClick={onMoveRecipe}>
         <button style={{color:"#F2D231", backgroundColor:"transparent", fontWeight:700, padding:"10px"}}>DISCOVER</button>
      </Link>
    </RecipeWrapper>
  )
}

export default RandomRecipe;