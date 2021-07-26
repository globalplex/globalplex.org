import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img alt="Globalplex logo" src={logo} />
          </Link>
          <div
            aria-expanded="false"
            aria-label="menu"
            className={`navbar-burger ${isActive && "is-active"}`}
            data-target="navbar-menu"
            onClick={() => setIsActive(!isActive)}
            onKeyPress={() => setIsActive(!isActive)}
            role="button"
            tabIndex="0"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div
          className={`navbar-menu ${isActive && "is-active"}`}
          id="navbar-menu"
        >
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/solutions">
              Solutions
            </Link>
            <Link className="navbar-item" to="/services">
              Services
            </Link>
            <Link className="navbar-item" to="/testimonials">
              Testimonials
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
