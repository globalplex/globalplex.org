import React from "react";

const VerticalServicesCard = ({ backgroundImage, subtitle, title }) => (
  <article className="card card-border is-full-height">
    <div className="card-image">
      <figure className="image is-2by1">
        <img src={backgroundImage} />
      </figure>
      <div className="is-overlay background-gradient align-end">
        <h1 className="title is-4 has-text-white pl-5 pb-5 pr-6">{title}</h1>
      </div>
    </div>
    <div className="card-content">
      <p className="subtitle is-6">{subtitle}</p>
    </div>
  </article>
);

export default VerticalServicesCard;
