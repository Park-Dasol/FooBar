import styled from 'styled-components'


export const ContactInputWrap = styled.div`

height : 80px;
display:flex;
flex-direction:column;
justify-content:center;

> input, textarea {
  border : none;
  background-color:transparent;
  border-bottom : 1px solid #6F6C67;
  transition : 3s;
  color:white;
  outline : none;
  font-size : 50px;
  font-weight : 300;
  z-index : 2;
}
> textarea {
  font-size : 25px;
  height:200px;
}

& .email {
  font-size : 30px;
}

> label {
  color:#6F6C67;
  font-size : 15px;
  transition : 1s;
  z-index : 2;

  ${({theme}: {theme: any}) => theme.tablet`
    color:#918d88;
  `}
}

&.deactive input, &.deactive textarea {
  display:none;

}

> input:focus, textarea:focus{
  display:flex;
}

&.deactive label {
  color:#D0CFCC;
  font-size : 20px;
}

label:hover {
  cursor:pointer;
}
`;



export const ContactFormArea= styled.form`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:10px;

`
