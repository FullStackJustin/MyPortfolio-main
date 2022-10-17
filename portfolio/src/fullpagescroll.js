import "./styles/fullpage.css"
import Fullpage, {FullPageSections, FullpageSection} from "@ap.cx/react-fullpage"
import {Screen1} from "../src/screens/section1"


const FullPage = () => {

    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection className="fullPageSection">
                <Screen1/>
                </FullpageSection>
                <FullpageSection>
                    <h1>screen 2</h1>
                </FullpageSection>
                <FullpageSection>
                    <h1>screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}






export default FullPage;