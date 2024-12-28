import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 111,
        top: 0,
      }}
      className="container-fluid  fs-5  "
    >
      <nav className="navbar navbar-expand-lg bg-body-tertiary  p-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Sushermala
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#activities">
                  NGO Activities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#donation">
                  Donation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#order">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
