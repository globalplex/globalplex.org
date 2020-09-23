import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ContactSection from "../components/ContactSection";
import ContentCard from "../components/ContentCard";
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
      {content.map((item) => (
        <section id={item.id} className="section">
          <div className="container">
            <h1 className="title">{item.title}</h1>
            <p className="subtitle">{item.blurb}</p>
            <div className="columns">
              {item.topics.map((subitem) => (
                <div className="column">
                  <ContentCard
                    image={subitem.image}
                    title={subitem.title}
                    subtitle={subitem.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
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
