import "../styles/projects.css"


export const Projects = () => {



    return (
        <div id="projectPageContainer" style={{backgroundColor: "grey"}}>
            <div className="live">
                <h4>Live Sites</h4>
                <img alt="project img"></img>
                <p>Projects Description</p>
            </div>
            <div className="sources">
                <h4>source</h4>
                <img alt=" project img"></img>
                <p>Projects Description</p>
            </div>
            <div className="coming">
                <h5>Coming soon...</h5>
                <img alt=" project img"></img>
                <p>Projects Description</p>
            </div>
        </div>
    )
}