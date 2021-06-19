import React from "react";

const ValuesCard = ({ image, subtitle, title }) => (
  <article className="card card-border card-max">
    <div className="columns is-gapless is-vcentered">
      <div className="column is-three-fifths">
        <div className="card-image">
          <figure className="image is-2by1">
            <img alt="" src={image} />
          </figure>
          <div className="is-overlay background-gradient is-flex is-align-items-flex-end">
            <h3 className="title is-4 has-text-white pb-5 pl-5 pr-6 has-text-shadow">
              {title}
            </h3>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card-content">
          <p className="subtitle is-6">{subtitle}</p>
        </div>
      </div>
    </div>
  </article>
);

export default ValuesCard;
