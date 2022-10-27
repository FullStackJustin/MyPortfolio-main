import "../styles/section3.css"
import React from "react";
import { Footer } from "../pages/footer"
import emailjs from '@emailjs/browser';

export const Screen3 = () => {

    const form = React.useRef();
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_accessToken;

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error);
          });
      };
    
    
    
    return(
        <div id="contactPageContainer">
            <div className="contactCard">
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                    <header><h3>Contact Me</h3></header>
                    <main>
                        <label>Enter Your Email</label>
                        <input id="emailInput" type="email" placeholder="Type your email"></input>
                        <br></br>
                        <br></br>
                        <label>Leave me a Message</label>
                        <input id="messageInput" placeholder="Type a comment, Question, or Message"></input>
                    </main>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}