import React from 'react'
import styled from 'styled-components'


export const MainButton = styled.button`
      background : ${props => props.backgroundMode === 'dark'? '#171613': '#FEF9F3' };
      color: ${props => props.backgroundMode === 'dark' ? '#FEF9F3' : '#171613'};
      font-size: ${props => props.size === 'large' ? '30px' : '15px'};
      font-family: sans-serif, 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial;
      font-weight: 600;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
`;
