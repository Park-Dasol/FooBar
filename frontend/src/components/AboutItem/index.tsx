import React , {VFC} from "react";
import {IAbout} from '../../utils/db'

interface Props {
  about : IAbout | undefined;
}

const AboutItem :VFC<Props>= ({about}) => {

  return (
    <div style={{display:"flex", flexDirection:"column", width: "15vw", marginLeft:"30px", marginRight:"30px"}}>
      <div style={{fontSize : "25px", fontWeight:400}}>0{about?.id}.</div>
      <div style={{marginTop:"22px", marginBottom :"10px", fontSize : "18px", fontWeight:600}}>{about?.title}</div>
      <div style={{fontSize:"18px"}}>{about?.description}</div>
    </div>
  )
}

export default AboutItem;