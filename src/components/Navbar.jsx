import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 111,
        top: 0,
      }}
      className="container-fluid mt-3 fs-5 "
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-pill p-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Sushermala 
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                NGO Activities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Donation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Order
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
