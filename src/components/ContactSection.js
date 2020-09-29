import React from "react";
import { Link } from "gatsby";

const ContactSection = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-vcentered is-centered px-6">
        <div className="column is-half is-one-third-widescreen has-text-centered-mobile">
          <p className="title is-2 has-text-dark">Ready for a consultation?</p>
        </div>
        <div className="column is-one-fifth" />
        <div className="column is-narrow has-text-centered-mobile">
          <Link to="/contact">
            <button className="button is-primary is-uppercase has-text-weight-bold px-6 py-5">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
