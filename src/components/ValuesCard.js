import React from "react";

const ValuesCard = (props) => (
  <div className="box">
    <div className="columns is-vcentered">
      <div className="column is-half">
        <div className="section">
          {/* <figure className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                    </figure> */}
          <h3 className="title has-text-centered has-text-primary">
            {props.title}
          </h3>
        </div>
      </div>
      <div className="column" style={{ padding: 0 }}>
        <div className="section">
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ValuesCard;
