import React from "react";

import "../pages/mystyles.scss";

const IndexSection = ({ children, subtitle, title }) => (
  <section className="section">
    <div className="container">
      <h2 className="underlined-heading is-uppercase has-text-grey-light">
        {title}
      </h2>
      <p className="title has-text-dark py-3">{subtitle}</p>
      {children}
    </div>
  </section>
);

export default IndexSection;
