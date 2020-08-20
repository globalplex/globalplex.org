import React from "react";

const TestimonialsCard = (props) => (
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Profile image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{props.name}</p>
          <p class="subtitle is-6">{props.title}</p>
        </div>
      </div>

      <div class="content">{props.blurb}</div>

      <div class="has-text-centered">
        <button class="button is-outlined is-primary is-normal">
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
