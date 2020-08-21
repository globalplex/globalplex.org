import React from "react";
import "./modules.module.css";

const SubpageBar = (props) => (
  <div className="tabs is-fullwidth is-hidden-mobile has-background-black has-text-white">
    <ul>
      <li>
        <a href={props.link1}>{props.tab1}</a>
      </li>
      <li>
        <a href={props.link2}>{props.tab2}</a>
      </li>
      <li>
        <a href={props.link3}>{props.tab3}</a>
      </li>
    </ul>
  </div>
);

export default SubpageBar;
