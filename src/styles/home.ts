
import styled from 'styled-components'
// import { isPropertySignature } from 'typescript';



// section들 담고 있는 wrapper
export const MainWrapper = styled.div`
  margin-top: 60px;
  width: 100vw;
  height: auto;
  `;

// each section
export const MainHome = styled.section`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  width: 100wh;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  padding: 0;
  `;


export const MainContentLineWrapper = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  border-left : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  border-right : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  height: 100%;
  width: 80%;
  align-items: flex-start;
`;

export const MainContentWrapper = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  height: 100%;
  width: 95%;
`;

export const MainLineContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  border-bottom : 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  width: 100%;
  height: 95%;
`;

export const MainContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  width: 100%;
  height: calc(100vh - 60px);
  // position:relative;
`;