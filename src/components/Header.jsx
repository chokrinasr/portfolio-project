import React from 'react';
import Typed from 'react-typed'


const Header = () => {
    return (
     
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Dévelloppeur web Full Stack</h1>
                <Typed className="typed-text" strings={["JS","REACT","NODEJS","JAVA","PHP","PYTHON"]} typeSpeed={40} backSpeed={60} loop/>
            <a href="#" className="btn-main-offer">Contact</a>
            </div>
        </div>
    );
}

export default Header
