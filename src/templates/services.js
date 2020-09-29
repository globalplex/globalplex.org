import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ContactSection from "../components/ContactSection";
import HorizontalServicesCard from "../components/HorizontalServicesCard";
import VerticalServicesCard from "../components/VerticalServicesCard";
import "../pages/mystyles.scss";

const ServicesPage = ({ data }) => {
  const {
    title,
    blurb,
    image,
    content,
    mode,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Header title={title} subtitle={blurb} backgroundImage={image} />
      <Tabs
        data={content.map((item) => ({
          target: `#${item.id}`,
          title: item.title,
        }))}
      />
      {content.map((item) => {
        const ServicesCard =
          item.topics.length < 3
            ? HorizontalServicesCard
            : VerticalServicesCard;
        return (
          <section id={item.id} className="section">
            <div className="container">
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">{item.blurb}</p>
              <div className="columns is-multiline is-centered">
                {item.topics.map((subitem) => (
                  <div
                    className={`column ${
                      item.topics.length < 3 &&
                      "is-four-fifths-tablet is-half-widescreen"
                    }`}
                  >
                    <ServicesCard
                      backgroundImage={subitem.image}
                      subtitle={subitem.description}
                      title={subitem.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <br />

      <div className="has-background-dark has-text-light">
        <div className="columns is-vcentered">
          <div style={{ paddingTop: "0" }} className="column is-half">
            <figure className="image">
              <img
                style={{ marginBottom: "0" }}
                src={mode.image}
                alt="Offer Format"
              />
            </figure>
          </div>
          <div className="column is-half">
            <h3 className="title is-3 has-text-light">{mode.title}</h3>
            <br />
            {mode.ways.map((item) => (
              <p className="subtitle has-text-light">{item}</p>
            ))}
          </div>
          <div className="column is-1" />
        </div>
      </div>

      <ContactSection />
    </Layout>
  );
};

export default ServicesPage;

export const query = graphql`
  query ServicesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        blurb
        image
        content {
          title
          id
          blurb
          topics {
            image
            title
            description
          }
        }
        mode {
          image
          title
          ways
        }
      }
    }
  }
`;
