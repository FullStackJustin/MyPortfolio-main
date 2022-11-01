import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "../styles/footer.css"

export const Footer = () => {

    useEffect(() => {
        Aos.init()
        console.log(Aos)
    }, [])


    return (
        <div  className="footerContainer">
            <div data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" className="navContainer">
                <nav>
                    <a href="/projects" id='footerLink1' className="footerLinks">Link 1</a>
                    <a href="/" id='footerLink2'> Link 2</a>
                    <a href="/" id='footerLink3'> Link 3</a>
                </nav>
            </div>
        </div>
    )
}
