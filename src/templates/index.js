import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import TestimonialsCard from "../components/TestimonialsCard";
import ContentCard from "../components/ContentCard";
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
      <div className="index-sections">
        <section
          className="hero is-dark is-bold is-large is-fullheight"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(../img/home-cover.jpg)`,
          }}
        >
          <div className="hero-body">
            <div className="container">
              <p className="title is-1 has-text-left">{landing.title}</p>
              <p className="subtitle has-text-left">
                Our mission is to effectively equip people to excel in life and
                expand their influence
              </p>
              <Link to="/contact/">
                <button className="button is-outlined is-primary is-medium has-text-weight-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>

        <IndexSection subtitle={services.blurb} title={services.title}>
          <div className="columns is-vcentered">
            <div className="column">
              <figure className="image">
                <img src={services.image} alt="About Founders" />
              </figure>
            </div>
            <div className="column is-1" />
            <div className="column is-half">
              {services.content.map((item) => (
                <>
                  <Link to={item.link}>
                    <div className="box">
                      <div className="section" style={{ padding: "1.5rem" }}>
                        <div className="columns is-vcentered">
                          <div className="column is-11">
                            <p className="is-1 has-text-weight-bold	has-text-black">
                              {item.title}
                            </p>
                            <br />
                            <p>{item.description}</p>
                          </div>
                          <div className="column is-1 is-hidden-mobile">
                            <FontAwesomeIcon
                              icon="chevron-right"
                              style={{ color: "#F18B15" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <br />
                </>
              ))}
            </div>
          </div>
        </IndexSection>

        <IndexSection subtitle={approach.blurb} title={approach.title}>
          <div className="columns">
            {approach.content.map((item) => (
              <div className="column">
                <ContentCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.description}
                />
              </div>
            ))}
          </div>
          <br />
          <br />
          <div className="has-text-right">
            <Link to={approach.callToActionLink}>
              <button className="button is-outlined is-primary is-medium">
                {approach.callToAction}
                <br />
                <span className="icon is-small">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#F18B15" }}
                  />
                </span>
              </button>
            </Link>
          </div>
        </IndexSection>

        <IndexSection subtitle={testimonials.blurb} title={testimonials.title}>
          <div className="columns">
            {testimonials.content.map((item) => (
              <div className="column">
                <TestimonialsCard
                  image={item.image}
                  name={item.name}
                  title={item.title}
                  blurb={item.blurb}
                  content={item.description}
                />
              </div>
            ))}
          </div>
          <br />
          <br />
          <div className="has-text-right">
            <Link to={testimonials.callToActionLink}>
              <button className="button is-outlined is-primary is-medium">
                {testimonials.callToAction}
                <br />
                <span className="icon is-small">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#F18B15" }}
                  />
                </span>
              </button>
            </Link>
          </div>
        </IndexSection>

        <section className="section">
          <div className="container">
            <div className="box has-background-dark">
              <div className="columns is-vcentered section">
                <div className="column px-6">
                  <p className="has-text-white title">{consult.title}</p>
                  <p className="has-text-light">{consult.blurb}</p>
                </div>
                <div className="column is-narrow has-text-centered px-6">
                  <Link to={consult.callToActionLink}>
                    <button className="button is-outlined is-primary is-medium has-text-weight-semibold">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
