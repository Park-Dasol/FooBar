
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
`;

// 선 없는 wrapper
export const MainContentWrapper = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  height: 100%;
  width: 95%;
  // justify-content:center;
  // align-items:center;
`;

//아래 선있는 content
export const MainLineContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  border-bottom : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  width: 100%;
  height: 95%;
`;

// 아래 선없는 content
export const MainContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  width: 100%;
  height: calc(100vh - 60px);
  position:relative;
  display: flex;
  flex-direction: column;
  justify:center;
  align-items: center;
  > div {
    z-index: 1;
  }
  > p {
    width : 20vw;
    text-align:center;
    align-self: flex-end;
    padding: 10px;
  }
`;


//title
export const FirstTitle = styled.div`
  color: black;
  font-size : 100px;
  text-align: center;
  display: inline;
  font-family: mermaid;

  `;
  
  export const SecondTitle = styled.div`
  color: white;
  display: inline;

  font-size : 100px;
  text-align: center;
  font-family: mermaid;

`;