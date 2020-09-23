import React from "react";

const Header = ({ backgroundImage, subtitle, title }) => (
  <header
    className="hero hero-background-image"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="pt-4" />
            <div className="pt-6" />
            <div className="pt-6" />
            <div className="pt-6" />
            <h1 className="title is-6 underlined-heading has-text-white">
              {title}
            </h1>
            <p className="subtitle is-3 has-text-white pt-3">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
