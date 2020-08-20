import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          {/* <img
            src={logo}
            alt="Globalplex"
            style={{ width: '14em', height: '5em' }}
          /> */}
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <p>Discover and Develop your Potential</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
