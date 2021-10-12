import styled from 'styled-components'

export const SearchBgImg = styled.img`
  height:100%;
  object-fit:contain;
  position: relative;
  ${({theme}: {theme: any}) => theme.tablet`
    bottom: 0;
    position: absolute;
  `}
`

//search result 전체 감싸는 div
export const SearchResultWrapper = styled.div`
  height:90%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width: 100%;
  height: 100%;

  ${({theme}: {theme: any}) => theme.tablet`
    height:96%;
  `}
`

// 결과에서 이미지 뺀 설명부분 감싸는 div
export const  DetailImgDescWrap = styled.div`
  display:flex;
  height:70%;
  ${({theme}: {theme: any}) => theme.tablet`
    flex-direction : column;
    padding : 0 5%;
    height:100%;
  `}
`



export const DetailCocktailImg = styled.img`
  border-radius : 500px 500px 0 0;
  width: 40%;
  margin-left : 12%;
  margin-right: 5%;
  object-fit:cover;
  ${({theme}: {theme: any}) => theme.tablet`
    border-radius : 0;
    width: 100%;
    margin :2.5% 0;
    height : 30vh;
  `}
`;


//search detail
export const DetailWrapper = styled.div`
display: flex;
margin-top: 3%;
margin-bottom : 3%;
width : 100%;

`

export const DetailTitle = styled.div`
font-weight:700;
font-family : PlayfairDisplayMedium;
width: 20%;
`

export const DetailDescription= styled.div`
  height:auto;
  line-break: auto;
  display: inline-block;
  width : 70%;
  font-family : NotoSerifKRRegular;
 
`