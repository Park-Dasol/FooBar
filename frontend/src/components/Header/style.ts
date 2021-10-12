
import styled from 'styled-components'

export const MyHeader = styled.header`
  background: ${({theme} : {theme: any}) => theme.bgColor};
  color: ${({theme} : {theme: any}) => theme.textColor};
  border-bottom: 1px solid ${({theme} : {theme: any}) => theme.borderColor};
  padding: 3px 20px;
  position:sticky;
  top: 0px;
  left :0px;
  width: 100%;
  height: 60px;
  z-index: 5;
  `;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 0px;
  grid-gap: 5px;
  color: transparent;
  font-family: sans-serif;
`;


export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  color: transparent;
`;

export const MenuButton = styled.button`
      background: ${({theme} : {theme: any}) => theme.bgColor};
      color: ${({theme} : {theme: any}) => theme.textColor};
      font-family: NotoSerifRegular, sans-serif, 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial;
      font-weight: 600;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
      padding-right: 40px;
      
      ${({theme}: {theme: any}) => theme.tablet`
        padding : 0 10px;
      `}
      
`;

export const LogoButton = styled.button`
      background: ${({theme} : {theme: any}) => theme.bgColor};
      color: ${({theme} : {theme: any}) => theme.textColor};
      font-family: NotoSerifRegular, sans-serif, 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial;
      font-weight: 500;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
      font-size : 30px;
      font-family: mermaid;
`;
