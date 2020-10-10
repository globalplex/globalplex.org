import React from "react";

const IndexSection = ({ children, subtitle, title }) => (
  <section className="section">
    <div className="container">
      <h2 className="underlined-heading is-uppercase has-text-grey-light">
        {title}
      </h2>
      <p className="is-size-3 has-text-dark pt-2 pb-5">{subtitle}</p>
      {children}
    </div>
  </section>
);

export default IndexSection;
