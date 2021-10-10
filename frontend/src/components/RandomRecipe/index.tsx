import React , {useEffect, useState, VFC} from "react";
import {RecipeWrapper, RandomRecipeImg, RandomRecipeTitle, RandomRecipeDescription, RandomRecipeLink} from '../../styles/randomrecipe';
import {IDrink} from '../../utils/db';
import { Link } from "react-router-dom";


interface Props {
  randomRecipe: IDrink;
  onMoveRecipe: (e:any) => void;
}

const RandomRecipe :VFC<Props>= ({randomRecipe, onMoveRecipe}) => {
  const [border, setBorder] = useState<string>('')

  useEffect(()=>{

    //image irregular border shape value
    let RandomBorder: string = '';
    for (var i =0 ; i < 4; i++) {
      RandomBorder += (Math.floor(Math.random()*30) + 40).toString()  + '% '
    }
    RandomBorder += '/';
    for (var i =0 ; i < 4; i++) {
      RandomBorder += ' ' + (Math.floor(Math.random()*30) + 40).toString() + '%'
    }
    setBorder(RandomBorder)
  },[])


  return (
    <RecipeWrapper>
      <RandomRecipeImg src={randomRecipe.strDrinkThumb} alt="" RandomBorder={border}/>
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