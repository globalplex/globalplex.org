import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../utils/fontawesome";

const ChevronLink = ({ children, to }) => (
  <Link className="is-flex is-justify-content-flex-end" to={to}>
    {children}
    <span className="icon">
      <FontAwesomeIcon icon="chevron-right" />
    </span>
  </Link>
);

export default ChevronLink;
