import React from "react";

import { formatParagraph } from "../utils/functions";

const FoundersCard = ({ description, image, subtitle, title }) => (
  <article className="is-clearfix">
    <img alt={title} className="image is-256x256 founder-image" src={image} />
    <h3 className="title is-4 is-uppercase">{title}</h3>
    <p className="subtitle is-6 has-text-grey-light">{subtitle}</p>
    <div className="content">{formatParagraph(description)}</div>
  </article>
);

export default FoundersCard;
