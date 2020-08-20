import React from "react";
import { Link } from "gatsby";

const ContactSection = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light has-text-black">
        <div className="content has-text-centered">
          {/* <img
            src={logo}
            alt="Globalplex"
            style={{ width: '14em', height: '5em' }}
          /> */}
        </div>
        <div className="section">
          <div className="content">
            <div class="columns is-vcentered">
              <div class="column is-1" />
              <div class="column is-three-fifths">
                <h1 class="title">Interested to learn more?</h1>
                <p>
                  Schedule a consultation session with us and see how we can
                  help you and your team reach your full potential.
                </p>
              </div>
              <div class="column is-1" />
              <div class="column">
                <Link to="/contact/">
                  <button class="button is-primary is-medium has-text-weight-semibold">
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
