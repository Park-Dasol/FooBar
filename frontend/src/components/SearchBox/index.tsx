import React , {VFC, useCallback} from "react";
import {useCocktailContext} from '../../utils/cocktailContext';


interface Props {
  
}

const SearchBox :VFC<Props>= () => {
  const { cocktail, setCocktail } = useCocktailContext()

  const onSubmit = useCallback((e)=> {
    e.preventDefault()
    setCocktail('11728')
  }, [])

  return (
    <div style={{width: '60%', height:"100%", display:'flex', justifyContent:"center", alignItems:"center"}}>
      <form action="" style={{width: '90%', borderBottom:"solid 1px #d9d9d9", padding: '10px', display:'flex', justifyContent:"center"}}>
        <input type="text" style={{width: '90%', outline:'none', border:"none", backgroundColor:"transparent", fontSize:"50px"}} placeholder="Search Cocktails..."/>
        <button onClick={onSubmit} style={{ width:"10%",  height:"50px", border:"solid 1px #d9d9d9", color:"#d9d9d9", backgroundColor:"transparent"}}>→</button>
      </form>
    </div>
  )
}

export default SearchBox;