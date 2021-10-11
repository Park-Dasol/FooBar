import React , {useCallback, VFC, useRef } from "react";
import {ContactInputWrap, ContactFormArea} from './style'
import {CgArrowLongRight} from  "react-icons/cg"; 
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Props {
}

require('dotenv').config()

const ContactForm :VFC<Props>= () => {
  const form = useRef<HTMLFormElement>(null);

  const successToast = () => toast.success('🦄 Your message has been sent successfully.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  const failToast = () => toast.warn('❌ Failed to send a message. Please try again.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  const activated = useCallback((e)=> {
    e.target.parentNode.classList.remove('deactive')
  },[])

  const deactivated = useCallback((e)=> {
    if (!e.target.value) {
      e.target.parentNode.classList.add('deactive')
    }
  }, [])

  const sendEmail = useCallback((e)=>{
    e.preventDefault();

    if (form?.current) {
      emailjs.sendForm('FooBar', 'template_t1updwo', form?.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            successToast()
        }, (error) => {
            console.log(error.text);
            failToast()
        });
    }
  }, [])



  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <ToastContainer />
       <ContactFormArea action="" ref={form} onSubmit={sendEmail}>
         <ContactInputWrap onClick={activated} >
          <label  htmlFor="Name">Name</label>
          <input className="name" autoFocus onBlur={deactivated} type="text" name="user_ame" id="Name"/>
         </ContactInputWrap>
         <ContactInputWrap className="deactive" onClick={activated} >
          <label  htmlFor="Email">Email</label>
          <input className="email" type="text"  onBlur={deactivated} name="user_email" id="Email"/>
         </ContactInputWrap>
         <ContactInputWrap className="deactive"  onClick={activated} style={{height:"300px"}}>
          <label  htmlFor="Message">Message</label>
          <textarea onBlur={deactivated} name="message" id="Message"></textarea>
         </ContactInputWrap>
         <button type="submit" value="Send" style={{fontSize :"22px", border:"1px solid #6F6C67", backgroundColor:"#171613", color:"#6F6C67", width : "200px", height:"60px", alignSelf:"flex-end", marginRight:"8%"}}>
          <CgArrowLongRight/> Send Message
         </button>
      </ContactFormArea>
    </div>
  )
}


export default ContactForm;
