import styled from 'styled-components'

export const ContactFormWrapper= styled.div`
width:50%;
padding:5% 5% 8% 5%;
display:flex;
flex-direction:column;
justify-content:space-around;
height :90%;

${({theme}: {theme: any}) => theme.tablet`
  width: 100%;
`}
`



export const ContactBgImg= styled.img`
  height:80%;
  object-fit:contain;
  align-sself:center;
  

  ${({theme}: {theme: any}) => theme.tablet`
    position:absolute;
    opacity: 0.3;
  `}
`