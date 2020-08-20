import React from "react";

const ProfileCard = (props) => (
  <div className="columns">
    <div className="column is-3 is-6-mobile">
      <figure class="image">
        <img src={props.img} alt="About Founders" />
      </figure>
    </div>
    <div className="column">
      <h2 className="title">{props.name}</h2>
      <p className="subtitle">{props.position}</p>
      <p>{props.bio}</p>
      <br />
      <p>{props.bio2}</p>
      <br />
      <p>{props.bio3}</p>
    </div>
  </div>
);

export default ProfileCard;
