import React from "react";

const HorizontalServicesCard = ({ image, subtitle, title }) => (
  <article className="card card-border">
    <div className="columns is-gapless">
      <div className="column">
        <div className="card-content">
          <h1 className="title is-4 underlined-heading has-text-dark">
            {title}
          </h1>
          <p className="subtitle is-6 pt-4">{subtitle}</p>
        </div>
      </div>
      <div className="column">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="" src={image} />
          </figure>
        </div>
      </div>
    </div>
  </article>
);

export default HorizontalServicesCard;
