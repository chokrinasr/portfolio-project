import React from 'react';
import logo from '../logo.gif';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img src={logo} className="logo" width="48" height="48" alt="" />CHOKRI NASR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >



                Présentation</Link>

            </li>
            
            <li className="nav-item">
              <Link className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Compétences</Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link"
                activeClass="active"
                to="timeline"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Experience</Link>
              
            </li>

            <li className="nav-item">
            <Link className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >contact</Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
