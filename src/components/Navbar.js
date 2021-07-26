import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import { getId } from "../utils/functions";

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
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link is-arrowless" to="/solutions">
                Solutions
              </Link>
              <div className="navbar-dropdown is-right">
                {[
                  {
                    title: "Executive Coaching",
                    target: "VISION",
                  },
                  {
                    title: "Leadership and Management",
                    target: "LEADER",
                  },
                  {
                    title: "Integrative Personal Transformation",
                    target: "INVEST",
                  },
                  {
                    title: "Team Development",
                    target: "IMPACT",
                  },
                  {
                    title: "Emerging Professionals",
                    target: "GROWTH",
                  },
                ].map((item) => (
                  <Link
                    className="navbar-item"
                    key={item.title}
                    to={`/solutions/${getId(item.target)}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
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
