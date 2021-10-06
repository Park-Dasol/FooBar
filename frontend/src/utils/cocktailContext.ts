import { createContext, useContext , Dispatch} from "react"
import {ICocktail} from '../utils/db'

export type CocktailContent = {
  cocktail:  ICocktail | undefined;
  setCocktail: Dispatch<React.SetStateAction<ICocktail | undefined>>
}
export const MyCocktailContext = createContext<CocktailContent>({
cocktail: {'id':0, 'name':""}, // set a default value
setCocktail: () => {},
})
export const useCocktailContext = () => useContext(MyCocktailContext)