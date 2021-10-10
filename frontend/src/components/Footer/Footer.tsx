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
        <a href="https://www.instagram.com/imdasolpark/" style={{fontSize:"30px", margin :"10px",  color:"#403d39"}}><CgInstagram/></a>
        <a href="https://github.com/Park-Dasol" style={{fontSize:"30px", margin :"10px",  color:"#403d39"}}><FaGithub/></a>
        <a href="mailto:dev.dasolpark@gmail.com" style={{fontSize:"30px",  color:"#403d39", margin :"10px"}}> <SiGmail/></a>
      </div>
    </div>
  )
}
