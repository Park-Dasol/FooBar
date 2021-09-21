
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
  z-index: 2;
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