import React from 'react';
import {CgInstagram} from 'react-icons/cg'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

export const Footer = () => {
  return (
    <div style={{backgroundColor:"#CDC8BC", height: "230px", display:"flex", justifyContent:"space-between", padding:"0 10%",  color:"#403d39"}}>
      <div style={{margin:"auto 20px", position:"relative", height:"100%", width:"230px"}}>
        <div style={{fontSize:"40px", position:"absolute", top:"15%" }}>Foobar</div>
        <div style={{position:"absolute", bottom:"10%"}}>@2021 Park Dasol</div>
      </div>
      <div style={{display:"flex", margin:"auto 20px"}}>
        <div style={{fontSize:"30px"}}><CgInstagram/></div>
        <div style={{fontSize:"30px"}}><FaGithub/></div>
        <a href="mailto:dev.dasolpark@gmail.com" style={{fontSize:"30px",  color:"#403d39"}}> <SiGmail/></a>
      </div>
    </div>
  )
}
