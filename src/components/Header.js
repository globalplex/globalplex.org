import React from "react";

const Header = (props) => (
  <section
    className="hero is-medium has-text-light"
    style={{
      paddingTop: "3rem",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${props.img})`,
    }}
  >
    <div className="hero-body">
      <div className="container">
        <p className="title is-1" style={{ color: "#F18B15" }}>
          {props.title}
        </p>
        <p className="subtitle has-text-white is-3">{props.subtitle}</p>
      </div>
    </div>
  </section>
);

export default Header;
