import "../styles/section2.css"

export const Screen2 = () => {



    return (
        <div className="fullPageContainer">
            <div className="header">
                <span id="headerText">FULLSTACKJUSTIN</span>
            </div>
            <div className="sectionContent">
                <div id="leftCard" className="column">
                    <form className="projectsForm">
                        <header><h1>Projects</h1></header>
                        <main>
                            <br />
                            <div class="dropdown">
                                <button class="dropbtn">Calculator</button>
                                <div class="dropdown-content">
                                    <p>Fun Calculator made with React, HTML, CSS and javascript.</p>
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