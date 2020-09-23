import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import favicon from "../img/favicon.svg";
import alternateFavicon from "../img/favicon.ico";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  const { title, description } = data.site.siteMetadata;

  return (
    <div>
      <Helmet>
        <html className="has-navbar-fixed-top" lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <link
          rel="alternate icon"
          type="image/x-icon"
          href={alternateFavicon}
          sizes="32x32"
        />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
