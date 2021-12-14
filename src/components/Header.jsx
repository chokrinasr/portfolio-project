import React from 'react';
import Typed from 'react-typed'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
     
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Dévelloppeur web Full Stack</h1>
                <Typed className="typed-text" strings={["JS","REACT","NODEJS","JAVA","PHP","PYTHON"]} typeSpeed={40} backSpeed={60} loop/>
                <Link className="btn-main-offer"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >contact</Link>
           
            
            </div>
        </div>
    );
}

export default Header
