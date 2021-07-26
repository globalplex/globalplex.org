import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ContactSection from "../components/ContactSection";
import SolutionCard from "../components/SolutionCard";

import "../styles/global.scss";
import { getId } from "../utils/functions";

export const SolutionPageTemplate = ({ header, blurb, topics }) => (
  <>
    <Helmet>
      <title>{header.title}</title>
    </Helmet>
    <Header {...header} />
    <Tabs
      data={["VISION", "LEADER", "INVEST", "IMPACT", "GROWTH"].map((item) => ({
        target: `/solutions/${getId(item)}`,
        title: item,
        active: getId(item) === getId(blurb.target),
      }))}
    />

    <section className="section">
      <div className="container">
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li className="is-active">
              <Link to={`/solutions/${getId(blurb.target)}`}>
                {blurb.target}
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className="title is-spaced">{blurb.title}</h2>
        <p className="subtitle">{blurb.description}</p>
        <div className="columns is-multiline is-centered pt-5">
          {topics &&
            topics.map((item) => (
              <div
                className="column is-half is-one-third-desktop"
                key={item.title}
              >
                <SolutionCard {...item} />
              </div>
            ))}
        </div>
      </div>
    </section>

    <ContactSection />
  </>
);

const SolutionPage = ({ data }) => (
  <Layout>
    <SolutionPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

export default SolutionPage;

export const query = graphql`
  query SolutionPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          title
          subtitle
        }
        blurb {
          title
          target
          description
        }
        topics {
          image
          title
        }
      }
    }
  }
`;
