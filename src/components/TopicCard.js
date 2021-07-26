import React from "react";

const TopicCard = ({ image, title }) => (
  <article className="card card-border desktop-card-max is-full-height m-auto">
    <div className="card-image has-background-dark">
      <figure className="image is-1by1">
        <img alt="" className="is-transparent-80" src={image} />
        <div className="is-overlay is-flex is-justify-content-center is-align-items-center is-uppercase has-text-grey-lighter has-text-weight-bold is-large-text">
          {title[0]}
        </div>
      </figure>
      <div className="is-overlay is-flex is-align-items-flex-end">
        <h3 className="title is-4 is-size-6-widescreen has-text-white dynamic-padding has-text-shadow">
          {title}
        </h3>
      </div>
    </div>
  </article>
);

export default TopicCard;
