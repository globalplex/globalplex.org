import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

import "../styles/global.scss";
import { getId } from "../utils/functions";

export const TopicPageTemplate = ({ html, header, solution, topic }) => (
  <>
    <Helmet>
      <title>{topic}</title>
    </Helmet>
    <Header {...header} />

    <section className="section has-background-white">
      <div className="container">
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li>
              <Link to={`/solutions/${getId(solution)}`}>{solution}</Link>
            </li>
            <li className="is-active">
              <Link to={`/topics/${getId(topic)}`}>{topic}</Link>
            </li>
          </ul>
        </nav>
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>

    <ContactSection />
  </>
);

const TopicPage = ({ data }) => (
  <Layout>
    <TopicPageTemplate
      html={data.markdownRemark.html}
      {...data.markdownRemark.frontmatter}
    />
  </Layout>
);

export default TopicPage;

export const query = graphql`
  query TopicPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          title
          subtitle
        }
        solution
        topic
      }
      html
    }
  }
`;
