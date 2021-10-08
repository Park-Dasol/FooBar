import { createContext, useContext, Dispatch} from "react"
import { lightTheme } from "../styles/theme"
import { Itheme } from "./db"

export type HeaderThemeContent = {
  headerTheme : Itheme;
  setHeaderTheme: Dispatch<React.SetStateAction<Itheme>>
}
export const MyHeaderThemeContext = createContext<HeaderThemeContent>({
  headerTheme: lightTheme, // set a default value
  setHeaderTheme: () => {},
})
export const useHeaderThemeContext = () => useContext(MyHeaderThemeContext)