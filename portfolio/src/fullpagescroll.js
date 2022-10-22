import "./styles/fullpage.css"
import Fullpage, {FullPageSections, FullpageSection} from "@ap.cx/react-fullpage"
import {Screen1} from "../src/screens/section1"
import {Screen2} from "../src/screens/section2"
import {Screen3} from "../src/screens/section3"
import {Logo } from './pages/logo';


const FullPage = () => {

    

    return (
        <div className="fullPageSection">
            <Logo/>
            <div className="section">
                <Screen1/>
            </div>
            <div className="section">
                <Screen2/>
            </div>
            <div className="section">
                <Screen3/>
            </div>
        </div>
    )
}






export default FullPage;