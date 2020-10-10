import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import TestimonialsCard from "../components/TestimonialsCard";
import VerticalServicesCard from "../components/VerticalServicesCard";
import IndexServicesCard from "../components/IndexServicesCard";
import IndexSection from "../components/IndexSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";
import "../pages/mystyles.scss";

const IndexPage = ({ data }) => {
  const {
    landing,
    services,
    approach,
    testimonials,
    consult,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <header className="hero is-large is-relative is-clipped">
        <img
          alt="Banner background image"
          className="hero-background"
          src="../img/home-cover.jpg"
        />
        <div className="hero-body">
          <div className="container py-6">
            <div className="columns has-text-centered-mobile">
              <div className="column is-four-fifths is-half-widescreen">
                <p className="title is-size-1 is-spaced has-text-weight-light has-text-light">
                  {landing.title}
                </p>
                <p className="subtitle has-text-light">
                  Our mission is to effectively equip people to excel in life
                  and expand their influence
                </p>
                <Link to="/contact">
                  <button className="button is-primary is-uppercase has-text-weight-bold mt-2 px-5 py-5">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section />

      <IndexSection subtitle={services.blurb} title={services.title}>
        <div className="columns is-desktop is-vcentered">
          <div className="column is-hidden-touch is-one-third-fullhd">
            <figure className="image is-square">
              <img src={services.image} />
            </figure>
          </div>
          <div className="column index-services-column">
            {services.content.map((item) => (
              <IndexServicesCard
                subtitle={item.description}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </IndexSection>

      <IndexSection subtitle={approach.blurb} title={approach.title}>
        <div className="columns">
          {approach.content.map((item) => (
            <div className="column">
              <VerticalServicesCard
                backgroundImage={item.image}
                title={item.title}
                subtitle={item.description}
              />
            </div>
          ))}
        </div>
        <Link className="link-align-end" to={approach.callToActionLink}>
          {approach.callToAction}
          <span className="icon">
            <FontAwesomeIcon icon="chevron-right" />
          </span>
        </Link>
      </IndexSection>

      <IndexSection subtitle={testimonials.blurb} title={testimonials.title}>
        <div className="columns">
          {testimonials.content.map((item) => (
            <div className="column testimonial-column">
              <TestimonialsCard
                blurb={item.blurb}
                content={item.description}
                image={item.image}
                name={item.name}
                subtitle={item.subtitle}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <Link className="link-align-end" to={testimonials.callToActionLink}>
          {testimonials.callToAction}
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
                  <p className="has-text-light">{consult.blurb}</p>
                </div>
                <div className="column" />
                <div className="column is-narrow has-text-right">
                  <Link to={consult.callToActionLink}>
                    <button className="button is-primary is-uppercase has-text-weight-bold px-5 py-5">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        landing {
          title
          description
          blurb
          image
        }
        services {
          title
          blurb
          image
          content {
            title
            link
            description
          }
        }
        approach {
          title
          blurb
          content {
            image
            title
            description
          }
          callToAction
          callToActionLink
        }
        testimonials {
          title
          blurb
          content {
            image
            name
            title
            subtitle
            blurb
            description
          }
          callToAction
          callToActionLink
        }
        consult {
          title
          blurb
          callToActionLink
        }
      }
    }
  }
`;
