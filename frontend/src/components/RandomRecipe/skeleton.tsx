import React from "react";
import styled, { keyframes }  from 'styled-components'
const Skeleton = () => {
  return (
    <SkeletonWrap > 
      <SkeletonImg ></SkeletonImg>
      <div style={{width: "100%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <SkeletonDiv ></SkeletonDiv>
        <SkeletonDiv style={{height:"20px", width:"90%"}}></SkeletonDiv>
        <SkeletonDiv style={{height:"20px", width:"90%"}}></SkeletonDiv>
        <SkeletonDiv style={{height:"20px", width:"80%"}}></SkeletonDiv>
        <SkeletonDiv style={{height:"20px", width:"60%"}}></SkeletonDiv>
      </div>

    </SkeletonWrap>
  );
};

export default Skeleton;

const loading = keyframes`
to {
  background-position: 315px 0, 0 0, 0 190px, 50px 195px;
}
`
const SkeletonDiv = styled.div`
background-color :grey;
margin :2px;
background: 
  linear-gradient(0.25turn, transparent, #fff, transparent),
  linear-gradient(#eee, #eee),
  radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
  linear-gradient(#eee, #eee);  
background-repeat: no-repeat; 
background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
animation: ${loading} 1.8s infinite linear;
`

const SkeletonImg = styled.div`
  width : 20vw;
  height :20vw;
  margin :2px;
  background-color :grey;
  border-radius:60%;
  background: 
    linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#eee, #eee);  
  background-repeat: no-repeat; 
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
  animation: ${loading} 1.8s infinite linear;
  ${({theme}: {theme: any}) => theme.tablet`
    flex-direction:row;
    width : 30%;
  `}
`


const SkeletonWrap = styled.div`
  display:flex;
  flex-direction:column;
  width : 20vw;
  margin: 10px 0;
  ${({theme}: {theme: any}) => theme.tablet`
    flex-direction:row;
    width : 100%;
  `}
`