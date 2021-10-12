import styled from 'styled-components'

export const AboutMainImg = styled.img`
  width:60%;
  object-fit:contain;
  bottom: 0;
  position: relative;
  ${({theme}: {theme: any}) => theme.tablet`
   width : 100%;
   position: absolute;
   bottom: 5%;
  `}
`;

export const AboutIntro = styled.div`
  font-size:70px;
  margin:auto; 
  text-align: center;
  font-family : PlayfairDisplayMedium;
  ${({theme}: {theme: any}) => theme.tablet`
    position: absolute;
    width :100%;
    margin-top : 10%;
    height : 40%;
    top : 0;
  `}
`


export const AboutLeftFeatures = styled.div`
  display:flex;
  align-self:flex-start;
  ${({theme}: {theme: any}) => theme.tablet`
    flex-direction : column;
  `}
`


export const AboutRightFeatures = styled.div`
  display:flex;
  align-self:flex-end;
  ${({theme}: {theme: any}) => theme.tablet`
    flex-direction : column;
    align-items : flex-end;
  `}
`

