import React from "react";

const SubpageBar = (props) => (
  <div className="tabs is-fullwidth is-hidden-mobile has-background-black has-text-white py-2">
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
      <li>
        <a href={props.link4}>{props.tab4}</a>
      </li>
    </ul>
  </div>
);

export default SubpageBar;
