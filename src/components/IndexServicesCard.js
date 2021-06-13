import React from "react";
import { FaChevronRight } from "react-icons/fa";

const IndexServicesCard = ({ subtitle, title }) => (
  <article className="card card-border">
    <div className="card-content">
      <div className="columns is-mobile is-vcentered">
        <div className="column">
          <h1 className="title is-4 has-text-dark">{title}</h1>
          <p className="subtitle is-6">{subtitle}</p>
        </div>
        <div className="column is-narrow">
          <span className="icon has-text-primary">
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  </article>
);

export default IndexServicesCard;
