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
                                <button className="dropbtn" disabled>Calculator</button>
                                <div className="dropdown-content">
                                    <p>Fun Calculator made with React, HTML, CSS and javascript.</p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn" disabled>Netflix Clone</button>
                                <div className="dropdown-content">
                                    <p>Frontend project built with React, </p>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn" disabled>Todo list w/ fetch</button>
                                <div className="dropdown-content">
                                    <a href="">Cool frontend design with get and delete method to update todo list</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn" disabled>Auth System Template</button>
                                <div className="dropdown-content">
                                    <a href="https://github.com/FullStackJustin/Auth-system-w-firebase-template" target="_blank">Cool frontend design with get and delete method to update todo list</a>
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
                                    <h4>Hello! My name is Justin Taylor and I am a fullstack web developer mainly specializing in react</h4>
                                <p>I am open to learning new skills and concepts</p>
                                <p>My hobbies include making music, exploring, and playing with my dog</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div id="rightCard" className="column">
                    <header style={headerLogoStyle}>
                        <img src={workAndEduLogo} style={logoSizing} alt="about logo"></img>
                    </header>
                    <header><h1>Work and EDU</h1></header>
                    <form className="workForm">
                        <main>
                            <div className="workMainDiv">
                                <div className="columnText">
                                    <p>Transitioning from manual labor roles, I fell in love with creating webpages in conclusion of the year 2021 and have since completed an online bootcamp and received several online-certificates in attempt to further progress professional intellect. </p>
                                </div>
                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </section>
    )
}