import React from "react";
import styled, { keyframes }  from 'styled-components'


const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingBox className="main">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </LoadingBox>
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  width :100vw;
  height : 110vh;
  position:absolute;
  overflow : hidden;
  background-color: #FEF9F3;
  z-index : 2;
`


const one = keyframes`
  30% {
    transform: translateY(-50%);
  }
`

const two = keyframes`
  50% {
    transform: translateY(-50%);
  }
`
const three = keyframes`
  70% {
    transform: translateY(-50%);
  }
`
const LoadingBox = styled.div`
  top: 50%;
  left: 50%;
  z-index : 2;
  display: flex;
  transform: translate(-50%, -50%);
  position: absolute;

  > div {
    margin: 10px;
    width: 50px;
    height: 50px;
    background-color: #003049;
    border-radius: 50%;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
  & .one {
    background-color: #336683;
    animation-name: ${one};
  }
  
  & .two {
    animation-name: ${two};
  }
  
  & .three {
    background-color: #669bbc;
    animation-name: ${three};
  }
`

