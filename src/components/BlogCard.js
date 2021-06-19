import React from "react";

const BlogCard = ({ image, name, subtitle, title, updatedAt }) => (
  <article className="card card-border card-max is-full-height is-flex is-flex-direction-column">
    <div className="card-image">
      <figure className="image is-3by2">
        <img alt="" src={image} />
      </figure>
    </div>
    <div className="card-content is-flex-grow-1">
      <div className="is-full-height is-flex is-flex-direction-column	is-justify-content-space-between">
        <div>
          <h3 className="title is-4 has-text-dark">{title}</h3>
          <p className="subtitle is-6 py-4">{subtitle}</p>
        </div>
        <div className="has-text-right">
          <p className="title is-6 has-text-dark">By {name}</p>
          <p className="subtitle is-7">Updated {updatedAt}</p>
        </div>
      </div>
    </div>
  </article>
);

export default BlogCard;
