import "./styles/fullpage.css"
import Fullpage, {FullPageSections, FullpageSection} from "@ap.cx/react-fullpage"
import {Screen1} from "../src/screens/section1"
import {Screen2} from "../src/screens/section2"


const FullPage = () => {

    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection className="fullPageSection">
                <Screen1/>
                </FullpageSection>
                <FullpageSection>
                    <Screen2/>
                </FullpageSection>
                <FullpageSection>
                    <h1>screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}






export default FullPage;