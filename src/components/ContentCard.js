import React from "react";

const ContentCard = (props) => (
  <div className="card">
    <div
      className="card-image section"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${props.image})`,
        paddingLeft: 0,
        paddingRight: 0,
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
