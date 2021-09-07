
import styled from 'styled-components'
// import { isPropertySignature } from 'typescript';

export const MainWrapper = styled.div`
  margin-top: 60px;
  width: 100vw;
  height: auto;
  `;


export const MainHome = styled.section`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  padding: 3px 20px;
  width: 100wh;
  height: calc(100vh - 60px);
  `;

export const MainContent = styled.div`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  padding: 3px 20px;

  top: 60px;
  left :0px;
  width: 100wh;
  height: calc(100vh - 30px);;
`;