import styled from 'styled-components'

export const AboutSingleWrap = styled.div`
  display:flex;
  flex-direction: column;
  width: 15vw;
  margin : 0 30px;
  ${({theme}: {theme: any}) => theme.tablet`
    width: 80%;
    margin : 3% 0;
  `}
`