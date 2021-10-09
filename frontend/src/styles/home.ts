
import styled from 'styled-components'
// import { isPropertySignature } from 'typescript';



// section들 담고 있는 wrapper
export const MainWrapper = styled.div`
  // margin-top: 60px;
  width: 100vw;
  height: auto;
  `;

// each section
export const Section = styled.section`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  width: 100%;
  // height: calc(100vh - 60px);
  height: 110vh;
  display: flex;
  justify-content: center;
  padding: 0;
  `;

// 안에 선 있는 wrapper
export const MainContentLineWrapper = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  border-left : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  border-right : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  height: 100%;
  width: 80%;
  align-items: flex-start;
  // justify-content:center;
`;

// 선 없는 wrapper
export const MainContentWrapper = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  height: 100%;
  paddding-top:4.5%;
  paddding-bottom:4.5%;
  width: 95%;
  // justify-content:center;
  // align-items:center;
`;

//아래 선있는 content
export const MainLineContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  border-bottom : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  border-top : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  width: 100%;
  height: calc(100vh - 60px);
;
`;

// 아래 선없는 content
export const MainContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  width: 100%;
  height: 100%;
  position:relative;
  display: flex;
  flex-direction: column;
  justify:center;
  align-items: center;
  paddding-top:4.5%;
  paddding-bottom:4.5%;
`;


//Main page Grid
export const MainGrid = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
    " empty empty empty"
     "ml first mr"
     "ml second mr"
     "ml image description";
    grid-template-columns: 1fr 1.2fr 1fr ;
    grid-template-rows: 0.5fr 1fr 1fr 6fr;
`;

export const Empty = styled.div`
  grid-area: empty;
`;
export const FirstLine = styled.div`
  grid-area: first;
  color: black;
  font-size : 100px;
  text-align:center;
  font-family: mermaid;
`;
export const SecondLine = styled.div`
  grid-area: second;
  text-shadow: 2px 2px 4px #ddbea9;
  color: white;
  font-size : 100px;
  font-family: mermaid;
  text-align:center;
`;
export const MainImage = styled.img`
  grid-area: image;
  border-radius : 500px 500px 0 0;
  box-shadow : -25px 0px 0px orange;
  margin-left 25px;
  width: 100%;
  object-fit:cover;
  overflow:hidden;
`;
export const Description = styled.div`
  grid-area: description;
  white-space:wrap;
  height:100%;
  padding: 20px 20px 20px 50px;
 
  display: table; 
  > p {
    display: table-cell;
    vertical-align:middle;
    line-height: 20px;
  }
`;


