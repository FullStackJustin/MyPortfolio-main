import "../styles/section3.css"
import React from "react";
import { Footer } from "../pages/footer"
import emailjs from '@emailjs/browser';

export const Screen3 = () => {
    // const [test, setTest] = React.useState("");
    const form = React.useRef();
    const serviceID = "service_le4z3eg";
    const templateID = "template_zm6ukw6";
    const publicKey = "6BnWXtAJp9KujfoUQ";

    const sendEmail = (e) => {
        e.preventDefault();
        
        
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
              console.log(result.text);
            }, (error) => {
                console.log(error);
            })
            e.target.reset();
        };
        const formCompletionValidation = () => {
            const userEmailInput = document.getElementById("emailInput");
            for(let e = 0; e < userEmailInput.length; e++){
                console.log(e)
                if ( e <= 0 ){
                    userEmailInput.style.display="hidden";
                } else { console.log("User is typing")}
            }
        }
        
    
    
    return(
        <div id="contactPageContainer">
            <div className="contactCard">
                    <header><h3>Contact Me</h3></header>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                    <main>
                        <label>Enter Your Name</label>
                        <input id="nameInput" name="from_name" type="text" placeholder="Type your name"></input>
                        <br/>
                        <label>Enter Your Email</label>
                        <input id="emailInput" name="from_email" type="email" placeholder="Type your email"></input>
                        <br/>
                        <label>Leave me a Message</label>
                        <input id="messageInput" name="message" placeholder="Type a comment, Question, or Message"></input>
                    </main>
                    <button onClick={formCompletionValidation} type="submit">Send Message</button>
                </form>
            <Footer/>
            </div>
        </div>
    )
}