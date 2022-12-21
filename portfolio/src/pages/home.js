import "../styles/home.css"
import {Screen1} from "../screens/section1"
import {Screen2} from "../screens/section2"
import {Screen3} from "../screens/section3"
// import {Footer} from './footer'


export const Home = () => {



    return (
        <div id="fullpageSection" className="fullPageSection">
            <Screen1/>
            <Screen2/>
            <Screen3/>
    </div>
    )
}