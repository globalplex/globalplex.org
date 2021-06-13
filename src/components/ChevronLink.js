import React from "react";
import { Link } from "gatsby";
import { FaChevronRight } from "react-icons/fa";

const ChevronLink = ({ children, to }) => (
  <Link className="is-flex is-justify-content-flex-end" to={to}>
    {children}
    <span className="icon">
      <FaChevronRight />
    </span>
  </Link>
);

export default ChevronLink;
