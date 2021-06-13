import React from "react";
import { Link } from "gatsby";

const Tabs = ({ data }) => (
  <div className="tabs is-fullwidth is-hidden-touch has-background-dark has-text-white pt-1">
    <div className="container">
      <ul>
        {data &&
          data.map((tab) => (
            <li className={tab.active ? "is-active" : ""} key={tab.target}>
              <Link to={tab.target}>{tab.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  </div>
);

export default Tabs;
