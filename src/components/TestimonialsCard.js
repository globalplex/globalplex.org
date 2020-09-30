import React, { useState } from "react";

const TestimonialsCard = ({ blurb, content, image, name, subtitle, title }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="card is-full-height flex-column">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} />
        </figure>
      </div>
      <div className="card-content has-text-centered flex-grow">
        <div className="is-full-height flex-column space-between">
          <div>
            <p className="title is-4 has-text-dark">{name}</p>
            <p className="subtitle is-7">
              {title},
              <br />
              <span className="is-uppercase">{subtitle}</span>
            </p>
          </div>
          <div>
            <p className="has-text-weight-bold py-4">{blurb}</p>
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
            <button className="delete" onClick={() => setIsActive(false)} />
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
