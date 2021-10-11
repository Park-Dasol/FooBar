
import styled from 'styled-components'

export const QuoteContent = styled.div`
  font-size:75px;
 text-align:center;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:60%;
  align-items:center;

  ${({theme}: {theme: any}) => theme.tablet`
    width: 85%;
  `}
`;

