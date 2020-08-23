import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ContactSection from "../components/ContactSection";
import "../pages/mystyles.scss";
import TestimonialsCard from "../components/TestimonialsCard";
import ContentCard from "../components/ContentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

const IndexPage = ({ data }) => {
  const {
    landing,
    services,
    approach,
    testimonials,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
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
            <h1 className="title is-1 has-text-left">{landing.title}</h1>
            <h2 className="subtitle has-text-left">
              Our mission is to effectively{" "}
              <span style={{ color: "#F18B15" }}>equip</span> people to{" "}
              <span style={{ color: "#F18B15" }}>excel</span> in life and{" "}
              <span style={{ color: "#F18B15" }}>expand</span> their influence
            </h2>
            <Link to="/contact/">
              <button className="button is-outlined is-primary is-medium has-text-weight-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer section */}
      <section className="section is-medium">
        <div className="container">
          <p className="subtitle">{services.title}</p>
          <h2 className="title">{services.blurb}</h2>
          <br />
          <br />
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
                  <Link to="/services/">
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
        </div>
      </section>

      {/* Our Approach section */}
      <section className="section is-medium has-background-light">
        <div className="container">
          <p className="subtitle">{approach.title}</p>
          <h2 className="title">{approach.blurb}</h2>
          <br />
          <br />
          <div className="columns">
            {approach.content.map((item) => (
              <div className="column">
                <ContentCard
                  img="../img/testimonials-header.png"
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
        </div>
      </section>

      {/* Customer Stories section */}
      <section className="section is-medium">
        <div className="container">
          <p className="subtitle">{testimonials.title}</p>
          <h2 className="title">{testimonials.blurb}</h2>
          <br />
          <br />
          <div className="columns">
            {testimonials.content.map((item) => (
              <div className="column">
                <TestimonialsCard
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
        </div>
      </section>

      <ContactSection />
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
      }
    }
  }
`;
