import styled from 'styled-components'
// import { isPropertySignature } from 'typescript'


export const MenuButton = styled.button`
      background: ${({theme} : {theme: any}) => theme.bgColor};
      color: ${({theme} : {theme: any}) => theme.textColor};
      font-family: sans-serif, 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial;
      font-weight: 600;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
      padding-right: 40px;
      
`;

export const LogoButton = styled.button`
      background: ${({theme} : {theme: any}) => theme.bgColor};
      color: ${({theme} : {theme: any}) => theme.textColor};
      font-family: sans-serif, 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial;
      font-weight: 500;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
      font-size : 30px;
      font-family: mermaid;
`;


// background : ${props => props.backgroundMode === 'dark'? '#171613': '#FEF9F3' };
// color: ${props => props.backgroundMode === 'dark' ? '#FEF9F3' : '#171613'};
// font-size: ${props => props.size === 'large' ? '30px' : '15px'};