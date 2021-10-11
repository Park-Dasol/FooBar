import styled from 'styled-components'

export const SearchBoxWrapper = styled.div`
  width: 60%;
  position:relative;
  height : 100%;
  ${({theme}: {theme: any}) => theme.tablet`
    margin : auto;
    width: 95%;
  `}
`
export const SearchContent = styled.div`
  position:absolute;
  top:calc(50vh - 90px);
  width: 100%;
  transition : 0.75s;

  ${({theme}: {theme: any}) => theme.tablet`
    top:calc(30vh - 90px);
  `}

  &.SearchFocused{
    top:20vh;
    ${({theme}: {theme: any}) => theme.tablet`
      top:5vh;
    `}
  }


`
export const SearchButton = styled.button`
  width:10%;
  border:solid 1px #d9d9d9;
  color:#d9d9d9; 
  background-color:transparent;
  font-size: xx-large;
  font-weight : 100;
`





export const SearchForm = styled.form`
  width: 100%;
  border-bottom:solid 1px #d9d9d9;
  padding: 10px;
  display:flex;
  height : 100%;
  font-size: 80px;

  // &.SearchFocused{
  //   font-size: 50px;
  // }
`


export const SearchInput = styled.input`
  width: 90%;
  outline:none; 
  border:none;
  background-color:transparent;
  font-size : 80px;
  transition: 0.75s;
  ${({theme}: {theme: any}) => theme.tablet`
    font-size: 50px;
  `}


  &.SearchFocused {
    font-size : 50px;
    ${({theme}: {theme: any}) => theme.tablet`
      font-size: 30px;
    `}
  }
`

export const AutoCompleteBox = styled.div`

width: 100%;
max-height:30vh;
overflow-y:scroll;
background-color:#fcfbf9;

&::-webkit-scrollbar {
  background-color:transparent;
  width:10px
}
&::-webkit-scrollbar-thumb {
    background-color:#d9d9d9;
    border-radius:16px;
    border:2px solid #f4f4f4;
}


`
export const AutoCompleteSpan = styled.span`
color: #7f7f7f;
padding : 7px;
font-size : 20px;
&:hover {
  background-color:#c0d6df;
  border-radius:50px;
  color: #4f6d7a;
  font-weight:600;
}
`
