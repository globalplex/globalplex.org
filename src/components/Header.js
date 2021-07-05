import React from "react";

const Header = ({ image, subtitle, title }) => (
  <header className="hero has-background-dark is-relative is-clipped">
    <img alt="" className="hero-background is-transparent-30" src={image} />
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="pt-4" />
            <div className="pt-6" />
            <div className="pt-6" />
            <div className="pt-6" />
            <h1 className="title is-6 underlined-heading is-uppercase has-text-white has-text-shadow">
              {title}
            </h1>
            <p className="subtitle is-3 has-text-white pt-3 has-text-shadow">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
