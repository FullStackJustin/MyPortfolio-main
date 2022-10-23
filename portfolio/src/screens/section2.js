import "../styles/section2.css"

export const Screen2 = () => {

    // var sectionContent = document.getElementById('sectionContent');

    // function fadeOutOnScroll(element) {
    //   if (!element) {
    //     console.log(element, " no element")
    //     return;
    //   }
      
    //   var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    //   var elementHeight = element.offsetHeight;
    //   var scrollTop = document.documentElement.scrollTop;
    //   console.log(element, distanceToTop, elementHeight, scrollTop);

    //   var opacity = 1;
      
    //   if (scrollTop > distanceToTop) {
    //     opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    //   }
      
    //   if (opacity >= 0) {
    //     element.style.opacity = opacity;
    //   }
    // }
    
    // function scrollHandler() {
    //   fadeOutOnScroll(sectionContent);
    // }
    
    // window.addEventListener('scroll', scrollHandler);
    

    return (
        <div className="fullPageContainer">
            <div className="header">
                <span id="headerText">FULLSTACKJUSTIN</span>
            </div>
            <div className="sectionContent" id="sectionContent">
                <div id="leftCard" className="column">
                    <form className="projectsForm">
                        <header><h1>Projects</h1></header>
                        <main>
                            <br />
                            <div className="dropdown">
                                <button className="dropbtn">Calculator</button>
                                <div className="dropdown-content">
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