import React from "react";

const SolutionCard = ({ image, title }) => (
  <article className="card card-border card-max is-full-height m-auto">
    <div className="card-image has-background-dark">
      <figure className="image is-1by1">
        <img alt="" className="is-transparent-80" src={image} />
        <div className="is-overlay is-flex is-justify-content-center is-align-items-center is-uppercase has-text-grey-lighter has-text-weight-bold is-large-text">
          {title[0]}
        </div>
      </figure>
    </div>
    <div className="card-content">
      <p className="subtitle">{title}</p>
    </div>
  </article>
);

export default SolutionCard;
