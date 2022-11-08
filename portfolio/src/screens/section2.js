import "../styles/section2.css"
import Aos from 'aos';
import React, {useEffect} from 'react';
import "aos/dist/aos.css";
// import RoyalBlue from "../imgs/Royal-Blue.jpg";

export const Screen2 = () => {

    useEffect(() => {
        Aos.init({duration: 4000})
    }, [])
    

    return (
        <section className="fullPageContainer">
            {/* <div className="header">
                <span id="headerText">FULLSTACKJUSTIN</span>
            </div> */}
            <div  className="sectionContent" id="sectionContent">
                <div id="leftCard" className="column">
                        <header><h1>Projects</h1></header>
                    <form className="projectsForm">
                        <main>
                            <div className="dropdown">
                                <button className="dropbtn">Calculator</button>
                                <div className="dropdown-content">
                                    <p>Fun Calculator made with React, HTML, CSS and javascript.</p>
                                </div>
                            </div>
                            
                        </main>
                    </form>
                </div>
                <div id="middleCard" className="column">
                    <header>
                        <h1>About Me</h1>
                        {/* <img src={RoyalBlue} alt="photo"></img> */}
                    </header>
                    <form className="aboutMeForm">
                        <main>
                            <div className="aboutMainDiv">
                                <h4>I am a fullstack web developer specializing in react</h4>
                                <br/>
                                <p></p>
                            </div>
                        </main>
                    </form>
                </div>
                <div id="rightCard" className="column">
                    <header><h1>Work and EDU</h1></header>
                    <form className="workForm">
                        <main>
                            <div className="workMainDiv">
                                <p>Here is going to go a description about the work i'd like to do in the near future and things that I am to opening and learning. </p>
                            </div>
                        </main>
                    </form>
                </div>
            </div>
        </section>
    )
}