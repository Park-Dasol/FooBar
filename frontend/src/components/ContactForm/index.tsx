import React , {useCallback, VFC} from "react";
import {ContactInputWrap} from './style'
import {CgArrowLongRight} from  "react-icons/cg"; 

interface Props {
}

const ContactForm :VFC<Props>= () => {

  const activated = useCallback((e)=> {
    e.target.parentNode.classList.remove('deactive')
  },[])

  const deactivated = useCallback((e)=> {
    if (!e.target.value) {
      e.target.parentNode.classList.add('deactive')
    }
  }, [])



  return (
    <div style={{display:"flex", flexDirection:"column"}}>
       <form action="" style={{width: '100%',display:'flex',flexDirection:"column", justifyContent:"center"}}>
         <ContactInputWrap onClick={activated} >
          <label  htmlFor="Name">Name</label>
          <input autoFocus onBlur={deactivated} type="text" name="Name" id="Name"/>
         </ContactInputWrap>
         <ContactInputWrap className="deactive" onClick={activated} >
          <label  htmlFor="Email">Email</label>
          <input type="text"  onBlur={deactivated} name="Email" id="Email"/>
         </ContactInputWrap>
         <ContactInputWrap className="deactive"  onClick={activated} style={{height:"300px"}}>
          <label  htmlFor="Message">Message</label>
          <textarea onBlur={deactivated} name="Message" id="Message"></textarea>
         </ContactInputWrap>
         <button style={{fontSize :"22px", border:"1px solid #6F6C67", color:"#6F6C67", width : "200px", height:"60px", alignSelf:"flex-end", marginRight:"12%"}}>
         <CgArrowLongRight/> Send Message
         </button>
      </form>
    </div>
  )
}

export default ContactForm;