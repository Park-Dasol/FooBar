import React from 'react'
import styled from 'styled-components'


export const MyHeader = styled.header`
    background : ${props => props.backgroundMode === 'dark'? '#171613': '#FEF9F3' };
    border-bottom: 1px solid ${props => props.backgroundMode === 'dark'? '#FEF9F3': '#656255'};
    padding: 3px 20px;
    position:fixed;
    top: 0px;
    width: 100%;
    z-index:-1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 0px;
  grid-gap: 5px;
  color: transparent;
`;


export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  color: transparent;
`;