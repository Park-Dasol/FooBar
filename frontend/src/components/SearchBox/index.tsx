import React , {VFC, useCallback} from "react";
import {useCocktailContext} from '../../utils/cocktailContext';
import {Link} from 'react-router-dom'
interface Props {
  onChangeSearch: (e: any) => void;
  onSubmitForm : (e: any) => void;
  inputValue : string;
  onFocus :  (e: any) => void;
}

const SearchBox :VFC<Props>= ({onChangeSearch, onSubmitForm, inputValue, onFocus}) => {
  const { cocktail, setCocktail } = useCocktailContext()

  return (
    <div>
      <form action="" style={{width: '90%', borderBottom:"solid 1px #d9d9d9", padding: '10px', display:'flex', justifyContent:"center"}}>
        <input onChange={onChangeSearch} onFocus={onFocus}value={inputValue} type="text" style={{width: '90%', outline:'none', border:"none", backgroundColor:"transparent", fontSize:"50px"}} placeholder="Search Cocktails..."/>
        <button onClick={onSubmitForm} style={{ width:"10%",  height:"50px", border:"solid 1px #d9d9d9", color:"#d9d9d9", backgroundColor:"transparent"}}>→</button>


      </form>
    </div>
  )
}

export default SearchBox;