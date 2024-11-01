// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <img src="/logo.png" alt="Logo" width="40" height="40" />
    </a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
        <li className="nav-item"><Link to="/admin" className="nav-link">Admin Portal</Link></li>
        <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
