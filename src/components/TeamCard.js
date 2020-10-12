import React from "react";

const TeamCard = ({ image, subtitle, title }) => (
  <article className="has-text-centered">
    <figure className="image is-160x160 ma">
      <img alt={title} className="is-rounded" src={image} />
    </figure>
    <div className="py-4">
      <h1 className="title is-5 is-uppercase has-text-dark">{title}</h1>
      <p className="subtitle is-6 has-text-grey-light">{subtitle}</p>
    </div>
  </article>
);

export default TeamCard;
