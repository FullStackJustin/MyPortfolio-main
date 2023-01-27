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
                                <a className="dropbtn" href="https://github.com/FullStackJustin/Netflix-Browse-Titles-frontend-clone" target="_blank" rel="noreferrer">Netflix Clone</a>
                                <div className="dropdown-content">
                                    <p>Frontend replica of Netflix's browse titles page. This project fetches and renders REST api data and was built with React, html, css, and javascript </p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://fullstackjustin.github.io/Free-online-games-website/" target="_blank" rel="noreferrer">F.O.G collection site</a>
                                <div className="dropdown-content">
                                    <p>Free Online Game website that renders game info from fetched api data built with React, html, css, and javascript </p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://github.com/FullStackJustin/Auth-system-w-firebase-template" target="_blank" rel="noreferrer">Auth System Template</a>
                                <div className="dropdown-content">
                                    <p>Complete authentication system with customizable homepage, login, signup, and account page built with firebase as backend, tailwind for styling, react, and javascript</p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="https://miyareads.netlify.app" target="_blank" rel="noreferrer">Personal Blog</a>
                                <div className="dropdown-content">
                                    <p>Personal blog website built for a client using Firebase for auth and database storage, react, javascript, tailwind, node and express</p>
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
                                    <h3>Hello! My name is Justin Taylor and I am a fullstack web developer specializing in react and javascript.</h3>
                                    <p><strong>Tech I have worked with </strong>: Javscript, HTML, CSS, React, Node, Express, Tailwind, Firebase, Bootstrap, Jest, Python, sqlAlchemy, Redux, Flask, Postman, fullpage.js, and email.js   </p>
                                    <h4>Fun Facts about me : </h4>
                                    <p>I especially like working with front end.</p>
                                    <p>I have been audio engineering since 2013. </p>
                                    <p>My favorite shows ever are Black Clover and The Last Kingdom.</p>
                                    <p>My hobbies include making music, travel & exploring, watching anime, playing ps4 with friends, and playing with my dog.</p>


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
                                    <p>I am a junior developer actively searching for a web development position.</p>
                                    <p>My previous work experience includes customer service, d2d sales, warehouse associate roles, and delivery operations. Feel free to view my LinkedIn for full scope of my work history.</p>
                                    <h5><strong>Education</strong></h5>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><strong>Title</strong></td>
                                                &ensp;
                                                <td><strong>Description</strong></td>
                                            </tr>
                                            <br/>
                                            <tr>
                                                <td>4Geeks Academy-Remote</td>
                                                &ensp;
                                                <td>Online bootcamp where I studied fullstack web development for 6 months learning React, javascript, pyhton, sqlAlchemy, flask, redux, html, css, and bootstrap. (Completed with certificate)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </section>
    )
}