import React from "react";

const FoundersCard = ({ description, image, subtitle, title }) => (
  <article className="is-clearfix">
    <img src={image} className="image is-256x256 founder-image" />
    <h1 className="title is-4 is-uppercase">{title}</h1>
    <p className="subtitle is-uppercase has-text-grey-light">{subtitle}</p>
    <p>{description}</p>
  </article>
);

export default FoundersCard;
