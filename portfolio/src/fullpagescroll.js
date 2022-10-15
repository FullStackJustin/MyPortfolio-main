import "./styles/fullpage.css"
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from "@ap.cx/react-fullpage"
import {Screen1} from "../src/screens/section1"


const FullPage = () => {
    const first = "Justin";
    const last = "Taylor";

    return (
        <Fullpage>
                <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection className="section">
                {/* <span id="headerText">{first + " " + last}</span>
                <a href="/projects"><button>Click Me</button></a> */}
                <Screen1/>
                </FullpageSection>
                <FullpageSection className="section">
                    <h1>screen 2</h1>
                </FullpageSection>
                <FullpageSection className="section">
                    <h1>screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}






export default FullPage;