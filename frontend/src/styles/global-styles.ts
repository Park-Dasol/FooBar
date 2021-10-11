import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
        font-family: NotoSerifRegular;
        color: ${({theme} : {theme: any}) => theme.textColor};
        overflow-x:hidden;
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        font-family: NotoSerifRegular;
        color: ${({theme} : {theme: any}) => theme.textColor};
        background-color: ${({theme} : {theme: any}) => theme.bgColor};
    }
    input {
        font-family: NotoSerifRegular;
    }

    
`;