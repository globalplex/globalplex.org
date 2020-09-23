import React from "react";
import { Link } from "gatsby";

const Tabs = ({ data }) => (
  <nav className="tabs is-fullwidth is-hidden-mobile has-background-dark has-text-white pt-1">
    <div className="container">
      <ul>
        {data &&
          data.map((tab) => (
            <li>
              <Link to={tab.target}>{tab.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  </nav>
);

export default Tabs;
