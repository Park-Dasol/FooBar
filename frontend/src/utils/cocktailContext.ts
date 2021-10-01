import { createContext, useContext } from "react"
export type CocktailContent = {
  cocktail: string
  setCocktail:(c: string) => void
}
export const MyCocktailContext = createContext<CocktailContent>({
cocktail: '', // set a default value
setCocktail: () => {},
})
export const useCocktailContext = () => useContext(MyCocktailContext)