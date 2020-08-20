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
        <h1 className="title" style={{ color: "#F18B15" }}>
          {props.title}
        </h1>
        <h2 className="subtitle has-text-white is-size-3">{props.subtitle}</h2>
      </div>
    </div>
  </section>
);

export default Header;
