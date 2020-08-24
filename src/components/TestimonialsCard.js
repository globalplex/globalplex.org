import React from "react";

const TestimonialsCard = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={props.image} alt="Profile" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <p className="title is-size-4 has-text-centered">{props.name}</p>
        <p className="is-size-6 has-text-centered">{props.title}</p>
        <p className="is-size-6 has-text-centered is-uppercase">
          {props.subtitle}
        </p>
      </div>

      <div className="content has-text-centered">
        <h3 className="is-size-4 has-text-weight-bold">{props.blurb}</h3>
      </div>

      <div className="has-text-centered">
        <button className="button is-outlined is-primary is-normal">
          Read More
        </button>
      </div>
    </div>
    <div className="overlay">
      <div className="section">
        <p className="has-text-black">{props.content}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsCard;
