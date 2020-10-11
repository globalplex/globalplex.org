import React from "react";

const TeamCard = ({ image, subtitle, title }) => (
  <article className="is-clearfix">
    <div className="columns is-vcentered is-mobile">
      <div className="column is-narrow ml-2">
        <figure className="image is-160x160">
          <img className="is-rounded" src={image} />
        </figure>
      </div>
      <div className="column">
        <h1 className="title is-5 is-uppercase has-text-dark">{title}</h1>
        <p className="subtitle is-6 has-text-grey-light">{subtitle}</p>
      </div>
    </div>
  </article>
);

export default TeamCard;
