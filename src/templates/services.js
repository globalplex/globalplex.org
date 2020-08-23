import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SubpageBar from "../components/SubpageBar";
import Container from "../components/Container";
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
      <Header title={title} subtitle={blurb} img={image} />
      <SubpageBar
        tab1="Leadership & Management"
        link1="#services-leadership"
        tab2="Career Acceleration"
        link2="#services-career"
        tab3="Personal Development"
        link3="#services-development"
      />
      <Container>
        {content.map((item) => (
          <section id={item.id} className="section">
            <h1 className="title has-text-primary">{item.title}</h1>
            <p className="subtitle">{item.blurb}</p>
            <div className="columns">
              {item.topics.map((subitem) => (
                <div className="column">
                  <ContentCard
                    img={subitem.image}
                    title={subitem.title}
                    subtitle={subitem.description}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
        <br />
      </Container>

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
              <p className="subitle is-5 has-text-light">{item}</p>
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
