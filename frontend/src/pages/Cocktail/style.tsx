import styled from 'styled-components'


// search section


export const SearchBoxWrapper = styled.div`
width: 60%;
flex-direction:column;
position:absolute;
top:calc(50vh - 90px);
right:0;
`


//search detail
export const DetailWrapper = styled.div`
display: flex;
margin-top: 3%;
margin-bottom : 3%;
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