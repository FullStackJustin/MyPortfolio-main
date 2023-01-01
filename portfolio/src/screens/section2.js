import "../styles/section2.css"
// import Aos from 'aos';
import React from 'react';
import "aos/dist/aos.css";
// import RoyalBlue from "../imgs/Royal-Blue.jpg";
import lightbulbLogo from "../imgs/lightbulbLogo.png";
import bitLogo from "../imgs/bitLogo2.png";
import workAndEduLogo from "../imgs/workAndEduLogo.png"

export const Screen2 = () => {

    // useEffect(() => {
    //     Aos.init({duration: 4000})
    // }, [])
    const logoSizing = {
        width: "4em"
    }
    const headerLogoStyle = {
        paddingTop: "8px",
        paddingBottom: "7px",
        marginTop: "10px",
        marginBottom: "5px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgb(13,25,87)",
        color: "rgb(137,137,137)",
        borderRadius: '50px',
        width: "5em"
    }


    return (
        <section className="fullPageContainer">
            {/* <div className="header">
                <span id="headerText">FULLSTACKJUSTIN</span>
            </div> */}
            <div className="sectionContent" id="sectionContent">
                <div id="leftCard" className="column">
                    <header style={headerLogoStyle}>
                        {/* <i class="fa-solid fa-computer fa-3x"></i> */}
                        <img style={logoSizing} src={lightbulbLogo} alt="Logo"></img>
                    </header>
                    <header><h1>Projects</h1></header>
                    <form className="projectsForm">
                        <main>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://github.com/FullStackJustin/Cool-Calculator" target="_blank" rel="noreferrer">Calculator</a>
                                <div className="dropdown-content">
                                    <p>Fun Calculator made with React, HTML, CSS and javascript.</p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://github.com/FullStackJustin/Netflix-Browse-Titles-frontend-clone" target="_blank" rel="noreferrer">Netflix Clone</a>
                                <div className="dropdown-content">
                                    <p>Frontend replica of Netflix's browse titles page. This project fetches and renders REST api data and was built with React, html, css, and javascript </p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://github.com/FullStackJustin/Free-online-games-website" target="_blank" rel="noreferrer">F.O.G collection site</a>
                                <div className="dropdown-content">
                                    <p>Free Online Game website that renders game info from fetched api data built with React, html, css, and javascript </p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://github.com/FullStackJustin/todo-w-fetch-and-react" target="_blank" rel="noreferrer">Todo list w/ fetch</a>
                                <div className="dropdown-content">
                                    <p >Todolist with a Cool frontend design that uses get and delete method to update todo list</p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://github.com/FullStackJustin/Auth-system-w-firebase-template" target="_blank" rel="noreferrer">Auth System Template</a>
                                <div className="dropdown-content">
                                    <p>Complete authentication system with customizable homepage, login, signup, and account page built with firebase as backend, tailwind for styling, react, and javascript</p>
                                </div>
                            </div>


                        </main>
                    </form>
                </div>
                <div id="middleCard" className="column">
                    <header style={headerLogoStyle}>
                        <img src={bitLogo} style={logoSizing} alt="about logo"></img>
                    </header>
                    <header>
                        <h1>About Me</h1>
                    </header>
                    <div className="aboutMeForm">
                        <main>
                            <div className="aboutMainDiv">
                                <div className="columnText">
                                    <h3>Hello! My name is Justin Taylor and I am a fullstack web developer mainly specializing in react and javascript.</h3>
                                    <p><strong>Tech I have worked with </strong>: Javscript, HTML, CSS, React, Node, Express, Tailwind, Firebase, Bootstrap, Jest, Python, sqlAlchemy, Redux, Flask, Postman, fullpage.js, next.js, and email.js   </p>
                                    <h4>Fun Facts about me : </h4>
                                    <p>I especially like working with front end.</p>
                                    <p>I have been audio engineering since 2013. </p>
                                    <p>My favorite shows ever are Black Clover and The Last Kingdom.</p>
                                    <p>My hobbies include making music, exploring, ps4 with friends, and playing with my dog.</p>


                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div id="rightCard" className="column">
                    <header style={headerLogoStyle}>
                        <img src={workAndEduLogo} style={logoSizing} alt="about logo"></img>
                    </header>
                    <header><h1>Experience</h1></header>
                    <form className="workForm">
                        <main>
                            <div className="workMainDiv">
                                <div className="columnText">
                                    <p>I am actively searching for my first professional role in either a frontend or fullstack position.</p>
                                    <br/>
                                    <p>My previous work experience includes customer service, d2d sales, warehouse associate roles, and delivery operations. Feel free to view my LinkedIn for full scope of my work history.</p>
                                </div>
                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </section>
    )
}