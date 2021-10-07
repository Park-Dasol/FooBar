import React from 'react';


export const Footer = () => {
  return (
    <div style={{backgroundColor:"#CDC8BC", height: "230px", display:"flex", justifyContent:"space-between", padding:"0 10%"}}>
      <div style={{margin:"auto 20px", position:"relative", height:"100%", width:"230px"}}>
        <div style={{fontSize:"40px", position:"absolute", top:"15%" }}>Foobar</div>
        <div style={{position:"absolute", bottom:"10%"}}>@2021 Park Dasol</div>
      </div>
      <div style={{display:"flex", margin:"auto 20px"}}>
        <div>인스타그램</div>
        <div>github</div>
        <div> 블로그</div>
      </div>
    </div>
  )
}
