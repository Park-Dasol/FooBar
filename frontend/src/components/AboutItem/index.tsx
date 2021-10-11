import React , {VFC} from "react";
import {IAbout} from '../../utils/db'
import {AboutSingleWrap} from './style'
interface Props {
  about : IAbout | undefined;
}

const AboutItem :VFC<Props>= ({about}) => {

  return (
    <AboutSingleWrap>
      <div style={{fontSize : "25px", fontWeight:400}}>0{about?.id}.</div>
      <div style={{marginTop:"22px", marginBottom :"10px", fontSize : "18px", fontWeight:600}}>{about?.title}</div>
      <div style={{fontSize:"18px"}}>{about?.description}</div>
    </AboutSingleWrap>
  )
}

export default AboutItem;