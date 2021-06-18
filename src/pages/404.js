import React from "react";
import { Link } from "gatsby";
import { FiAlertTriangle } from "react-icons/fi";

import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="has-text-centered">
          <FiAlertTriangle className="py-4" size="15rem" />
          <h1 className="title is-1 is-spaced has-text-dark">
            404 - Page Not Found
          </h1>
          <p className="subtitle">
            We can&rsquo;t find the page you are looking for!
          </p>
          <Link
            className="button is-primary is-uppercase has-text-weight-bold px-5 py-5"
            to="/"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
