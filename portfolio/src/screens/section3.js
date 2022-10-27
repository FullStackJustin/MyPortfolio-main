import "../styles/section3.css"
import { Footer } from "../pages/footer"

export const Screen3 = () => {

    
    
    
    return(
        <div id="contactPageContainer">
            <div className="contactCard">
                <form id="contactForm">
                    <header><h3>Contact Me</h3></header>
                    <main>
                        <label>Enter Your Email</label>
                        <input id="emailInput" placeholder="Type your email"></input>
                        <br></br>
                        <br></br>
                        <label>Leave me a Message</label>
                        <input id="messageInput" placeholder="Type a comment, Question, or Message"></input>
                    </main>
                </form>
            </div>
            <Footer/>
        </div>
    )
}