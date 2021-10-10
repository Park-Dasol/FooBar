import React from "react";
import styled, { keyframes }  from 'styled-components'
const Skeleton = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", width : '20vw', height : "30vw"}}> 
      <SkeletonDiv style={{width: "100%", borderRadius:"50%",  backgroundColor :"grey", height :"20vw"}}></SkeletonDiv>
      <SkeletonDiv style={{width : "100%", height :"30px",  backgroundColor :"grey",margin :"2px"}}></SkeletonDiv>
      <SkeletonDiv style={{height:"20px", width:"80%", backgroundColor :"grey", margin :"2px"}}></SkeletonDiv>
      <SkeletonDiv style={{height:"20px", width:"60%", backgroundColor :"grey", margin :"2px"}}></SkeletonDiv>
      <SkeletonDiv style={{height:"20px", width:"90%", backgroundColor :"grey", margin :"2px"}}></SkeletonDiv>

    </div>
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
borderRadius:50%;
background: 
  linear-gradient(0.25turn, transparent, #fff, transparent),
  linear-gradient(#eee, #eee),
  radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
  linear-gradient(#eee, #eee);  
background-repeat: no-repeat; 
background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
animation: ${loading} 1.8s infinite linear;

`