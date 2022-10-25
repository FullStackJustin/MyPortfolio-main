import "../styles/section3.css"

export const Screen3 = () => {

    
    
    
    return(
        <div className="fullPageContainer" id="contactPageContainer">
            <div className="contactPageContainer">
                <div className="contactCard">
                    <form>
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
            </div>
        </div>
    )
}