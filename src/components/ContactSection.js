import React from "react";
import { Link } from "gatsby";

const ContactSection = () => (
  <section className="section has-background-grey-lighter">
    <div className="container">
      <div className="columns is-vcentered is-centered px-6">
        <div className="column is-half is-one-third-widescreen has-text-centered-mobile">
          <h3 className="is-size-3 has-text-dark">Ready for a consultation?</h3>
        </div>
        <div className="column is-one-fifth" />
        <div className="column is-narrow has-text-centered-mobile">
          <Link
            className="button is-primary is-uppercase has-text-weight-bold px-6 py-5"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
