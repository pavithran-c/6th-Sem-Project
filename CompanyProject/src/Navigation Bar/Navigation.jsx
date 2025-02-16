import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Friends Car Care</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking" className="navbar-button">Book Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
