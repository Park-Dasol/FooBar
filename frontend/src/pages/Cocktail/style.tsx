import styled from 'styled-components'



export const AutoCompleteBox = styled.div`

width: 100%;
max-height:30%;
overflow-y:auto;
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
display:inline-block;
padding : 7px;
&:hover {
  background-color:#c0d6df;
  border-radius:50px;
  color: #4f6d7a;
  font-weight:600;
}
`



//detail
export const DetailWrapper = styled.div`
display: flex;
margin-top: 5%;
margin-bottom : 5%;
width : 100%;

`

export const DetailTitle = styled.div`
font-weight:700;
width: 20%;
`

export const DetailDescription= styled.div`
height:auto;
line-break: auto;
display: inline-block;
width : 70%;
`