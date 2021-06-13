import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../utils/fontawesome";

const ChevronLink = ({ children, to }) => (
  <Link className="link-align-end" to={to}>
    {children}
    <span className="icon">
      <FontAwesomeIcon icon="chevron-right" />
    </span>
  </Link>
);

export default ChevronLink;
