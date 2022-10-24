import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "../styles/boxes.css"

export const Test = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    return (
        <>
        <h1>Hello world</h1>
        <div className="grids">
            <div data-aos="fade-down" className="boxes">3</div>
        </div>
        </>
    )
}
