import React from "react";
import "./Navbar.css"
import img from "../../Assets/Images/logo.jpg" ;
const Navbar = () => {
  return (
    <div className="nav">
      <nav id="navbar">
        <div id="logo">
          <img src={img} alt="mask" />
        </div>
        <ul>
          <li className="items">
            <a href="#home">Home</a>
          </li>
          <li className="items">
            <a href="#services">Services</a>
          </li>
          <li className="items">
            <a href="#client-section">Our Clients</a>
          </li>
          <li className="items">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
