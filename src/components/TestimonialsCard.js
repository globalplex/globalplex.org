import React from "react";

const TestimonialsCard = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-3by2">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Profile image"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">{props.title}</p>
        </div>
      </div>

      <div className="content">{props.blurb}</div>

      <div className="has-text-centered">
        <button className="button is-outlined is-primary is-normal">
          Read More
        </button>
      </div>
    </div>
    <div className="overlay">
      <div className="section">
        <p className="has-text-black vertical-center">{props.content}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsCard;
