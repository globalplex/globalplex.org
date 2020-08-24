import React from "react";
import { Link } from "gatsby";

const ContactSection = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light has-text-black">
        <div className="section">
          <div className="content">
            <div className="columns is-vcentered">
              <div className="column is-1" />
              <div className="column is-three-fifths">
                <h1 className="title">Interested to learn more?</h1>
                <p className>
                  Schedule a consultation session with us and see how we can
                  help you and your team reach your full potential.
                </p>
              </div>
              <div className="column is-1" />
              <div className="column">
                <Link to="/contact/">
                  <button className="button is-primary is-medium has-text-weight-semibold">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default ContactSection;
