import "../styles/section2.css"
import Aos from 'aos';
import React, {useEffect} from 'react';
import "aos/dist/aos.css";

export const Screen2 = () => {

    useEffect(() => {
        Aos.init({duration: 4000})
    }, [])
    

    return (
        <div className="fullPageContainer">
            <div className="header">
                <span id="headerText">FULLSTACKJUSTIN</span>
            </div>
            <div  className="sectionContent" id="sectionContent">
                <div id="leftCard" className="column">
                    <form className="projectsForm">
                        <header><h1>Projects</h1></header>
                        <main>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Calculator</button>
                                <div  className="dropdown-content">
                                    <p aos-data="fade-down" >Fun Calculator made with React, HTML, CSS and javascript.</p>
                                </div>
                            </div>
                            
                        </main>
                    </form>
                </div>
                <div id="middleCard" className="column"><h1>column1</h1></div>
                <div id="rightCard" className="column"><h1>column1</h1></div>
            </div>
        </div>
    )
}