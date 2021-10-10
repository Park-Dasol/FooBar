import React , {VFC, useCallback, useEffect, useState, useRef} from "react";
import {useCocktailContext} from '../../utils/cocktailContext';
import {Link} from 'react-router-dom'
import {SearchButton, SearchContent, SearchBoxWrapper, SearchInput, AutoCompleteBox, AutoCompleteSpan, SearchForm} from './style'
import { IDrink } from "../../utils/db";
import { GiConsoleController } from "react-icons/gi";
import {CgArrowLongRight} from  "react-icons/cg"; 

interface Props {
  onChangeSearch: (e: any) => void;
  onSubmitForm : (e: any) => void;
  inputValue : string;
  // onFocus :  (e: any) => void;
  autoComplete ?: any[];
  setInputValue : (e: any) => void;
  setCocktailDetail :  (e: any) => void;
}

const SearchBox :VFC<Props>= ({onChangeSearch, onSubmitForm, inputValue, setInputValue,autoComplete, setCocktailDetail}) => {
  const { cocktail, setCocktail } = useCocktailContext();
  // const inputRef = useRef<HTMLInputElement>(null);

  const onFocus = useCallback((e)=> {
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    const searchContent = document.querySelector('#search_content')
    input?.classList.add('SearchFocused')
    button?.classList.add('SearchFocused')
    searchContent?.classList.add('SearchFocused');

  }, [inputValue])

  const outFocus = useCallback(()=> {
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    const searchContent = document.querySelector('#search_content')
    
    if (!inputValue.length) {
      searchContent?.classList.remove('SearchFocused')
      input?.classList.remove('SearchFocused')
      button?.classList.remove('SearchFocused')
    }
  }, [inputValue])

  return (
    <SearchBoxWrapper>
      <SearchContent id="search_content">
        <SearchForm action="" id="searchform" onFocus={onFocus} onBlur={outFocus} onSubmit={onSubmitForm}>
          <SearchInput name="input" onChange={onChangeSearch} value={inputValue} type="text"  placeholder="Search Cocktails..."/>
          <SearchButton form="searchform" value="submit" ><CgArrowLongRight/></SearchButton>
        </SearchForm>
        <AutoCompleteBox style={{display: autoComplete? 'static' : 'none'}}>
          {autoComplete?.map(recom => 
            (<li onClick={() => (setCocktail({id:parseInt(recom.id), name:recom.name}), setInputValue(recom.name), setCocktailDetail(undefined))} key={recom.id} style={{listStyle:'none', height:"30px", cursor:"pointer", margin :"8px", padding :"3px 10px", display:"flex", alignItems:"center"}}>
              <AutoCompleteSpan data-id={parseInt(recom.id)}>{recom.name}</AutoCompleteSpan>
            </li>)
          )}
        </AutoCompleteBox>
      </SearchContent>
    </SearchBoxWrapper>
  )
}

export default SearchBox;