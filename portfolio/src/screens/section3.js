import "../styles/section3.css"

export const Screen3 = () => {

    
    
    
    return(
        <div className="fullPageContainer" id="contactPageContainer">
            <div className="contactPageContainer">
                <div className="contactCard">
                    <form>
                        <header><h3>Contact Me</h3></header>
                        <main>
                            <label types="text" for="emailInput">Enter Your Email</label>
                            <input id="emailInput" placeholder="Send me an email"></input>
                            <label types="text" for="messageInput">Leave me a Message</label>
                            <input id="messageInput" placeholder="Type a comment, Question, or Message"></input>
                        </main>
                    </form>
                </div>
            </div>
        </div>
    )
}