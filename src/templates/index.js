import React from "react";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import IndexSection from "../components/IndexSection";
import IndexServicesCard from "../components/IndexServicesCard";
import VerticalServicesCard from "../components/VerticalServicesCard";
import TestimonialsCard from "../components/TestimonialsCard";
import "../pages/mystyles.scss";
import "../utils/fontawesome";
import { getId } from "../utils/functions";

export const IndexPageTemplate = ({
  header,
  services,
  approach,
  testimonials,
  consult,
}) => (
  <>
    <header className="hero is-large has-background-dark is-relative is-clipped">
      <img
        alt=""
        className="hero-background is-transparent"
        src={header.image}
      />
      <div className="hero-body">
        <div className="container py-6">
          <div className="columns has-text-centered-mobile">
            <div className="column is-four-fifths is-half-widescreen">
              <p className="title is-1 is-spaced has-text-weight-light has-text-light">
                {header.title}
              </p>
              <p className="subtitle has-text-light pb-2">{header.subtitle}</p>
              <Link
                className="button is-primary is-uppercase has-text-weight-bold px-5 py-5"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section />

    <IndexSection subtitle={services.subtitle} title={services.title}>
      <div className="columns is-desktop is-vcentered">
        <div className="column is-hidden-touch is-one-third-fullhd">
          <figure className="image is-square">
            <img alt="" src={services.image} />
          </figure>
        </div>
        <div className="column index-services-column">
          {services.content.map((item) => (
            <div>
              <Link to={`/services#${getId(item.title)}`}>
                <IndexServicesCard {...item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </IndexSection>

    <IndexSection subtitle={approach.subtitle} title={approach.title}>
      <div className="columns">
        {approach.content.map((item) => (
          <div className="column">
            <VerticalServicesCard {...item} />
          </div>
        ))}
      </div>
      <Link className="link-align-end" to="/contact">
        Contact us to learn more
        <span className="icon">
          <FontAwesomeIcon icon="chevron-right" />
        </span>
      </Link>
    </IndexSection>

    <IndexSection subtitle={testimonials.subtitle} title={testimonials.title}>
      <div className="columns testimonial-columns">
        {testimonials.content.map((item) => (
          <div className="column testimonial-column">
            <TestimonialsCard {...item} />
          </div>
        ))}
      </div>
      <Link className="link-align-end" to="/testimonials">
        See more testimonials
        <span className="icon">
          <FontAwesomeIcon icon="chevron-right" />
        </span>
      </Link>
    </IndexSection>

    <section className="section">
      <div className="container">
        <div className="box has-background-dark">
          <div className="section">
            <div className="columns is-desktop is-vcentered px-4">
              <div className="column is-two-thirds-desktop is-three-fifths-widescreen">
                <p className="title is-2 has-text-light">{consult.title}</p>
                <p className="has-text-light">{consult.subtitle}</p>
              </div>
              <div className="column" />
              <div className="column is-narrow has-text-right">
                <Link
                  className="button is-primary is-uppercase has-text-weight-bold px-5 py-5"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const IndexPage = ({ data }) => (
  <Layout>
    <IndexPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          title
          subtitle
        }
        services {
          image
          title
          subtitle
          content {
            title
            subtitle
          }
        }
        approach {
          title
          subtitle
          content {
            image
            title
            subtitle
          }
        }
        testimonials {
          title
          subtitle
          content {
            image
            name
            title
            subtitle
            blurb
            description
          }
        }
        consult {
          title
          subtitle
        }
      }
    }
  }
`;
