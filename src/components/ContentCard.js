import React from "react";

const ContentCard = (props) => (
  <div className="card">
    <div
      className="card-image"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.img})`,
      }}
    >
      <div style={{ padding: 0 + "em" }}>
        <div className="section">
          <h3 className="title has-text-lef has-text-white">{props.title}</h3>
        </div>
      </div>
    </div>
    <div className="card-content">
      <div className="content">
        <p className="subtitle">{props.subtitle}</p>
      </div>
    </div>
  </div>
);

export default ContentCard;
