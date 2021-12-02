import React from 'react';
import logo from '../logo.gif';
import "../App.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
  <a className="navbar-brand" href="#"><img src={logo} className="logo" width="48" height="48" alt="" />CHOKRI NASR</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">accueil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Présentation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Compétences</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
    </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar