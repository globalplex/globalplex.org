import React from "react";
import "../pages/mystyles.scss";

const IndexSection = ({ children, subtitle, title }) => (
  <section className="section">
    <div className="container">
      <h2 className="underlined-heading">{title}</h2>
      <h3 className="py-4 title">{subtitle}</h3>
      {children}
    </div>
  </section>
);

export default IndexSection;
