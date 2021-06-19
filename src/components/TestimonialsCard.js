import React, { useState } from "react";

const TestimonialsCard = ({
  blurb,
  description,
  image,
  name,
  subtitle,
  title,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="card card-max is-full-height is-flex is-flex-direction-column">
      <div className="card-image">
        <figure className="image is-4by3">
          <img alt={name} src={image} />
        </figure>
      </div>
      <div className="card-content has-text-centered is-flex-grow-1">
        <div className="is-full-height is-flex is-flex-direction-column is-justify-content-space-between">
          <div>
            <h3 className="title is-4 has-text-dark">{name}</h3>
            <p className="subtitle is-7">
              {title},
              <br />
              <span className="is-uppercase">{subtitle}</span>
            </p>
          </div>
          <div>
            <p className="has-text-weight-bold py-4">&ldquo;{blurb}&rdquo;</p>
          </div>
          <div>
            <button
              className="button is-small is-primary is-outlined"
              onClick={() => setIsActive(true)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isActive
            ? "is-active-transition"
            : "is-inactive-transition is-invisible"
        }
      >
        <div className="is-overlay is-scrollable">
          <div className="notification is-radiusless is-min-full-height is-primary is-light has-text-dark">
            <button
              aria-label="Delete"
              className="delete"
              onClick={() => setIsActive(false)}
            />
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialsCard;
