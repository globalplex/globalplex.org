import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import VerticalServicesCard from "../components/VerticalServicesCard";
import HorizontalServicesCard from "../components/HorizontalServicesCard";
import ContactSection from "../components/ContactSection";

import "../styles/global.scss";
import { getId } from "../utils/functions";

export const ServicesPageTemplate = ({ header, content, formats }) => (
  <>
    <Header {...header} />
    <Tabs
      data={
        content &&
        content.map((item) => ({
          target: `/services#${getId(item.title)}`,
          title: item.title,
        }))
      }
    />

    {content &&
      content.map((item) => {
        const ServicesCard =
          item.cards.length < 3 ? HorizontalServicesCard : VerticalServicesCard;
        return (
          <section className="section" id={getId(item.title)} key={item.title}>
            <div className="container">
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">{item.subtitle}</p>
              <div className="columns is-multiline is-centered pt-4">
                {item.cards &&
                  item.cards.map((card) => (
                    <div
                      className={`column ${
                        item.cards.length < 3 &&
                        "is-four-fifths-tablet is-half-widescreen"
                      }`}
                      key={card.title}
                    >
                      <ServicesCard {...card} />
                    </div>
                  ))}
              </div>
            </div>
          </section>
        );
      })}

    <section>
      <div className="columns is-desktop is-gapless is-vcentered has-background-dark">
        <div className="column is-hidden-touch is-two-fifths-widescreen is-one-third-fullhd">
          <figure className="image is-5by4">
            <img alt="" src={formats.image} />
          </figure>
        </div>
        <div className="column">
          <div className="section px-6">
            <p className="title is-3 has-text-light">{formats.title}</p>
            <ol className="has-boxed-counter">
              {formats.ways &&
                formats.ways.map((item) => (
                  <li className="is-size-5 has-text-light" key={item}>
                    {item}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <ContactSection />
  </>
);

const ServicesPage = ({ data }) => (
  <Layout>
    <ServicesPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

export default ServicesPage;

export const query = graphql`
  query ServicesPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          title
          subtitle
        }
        content {
          title
          subtitle
          cards {
            image
            title
            subtitle
          }
        }
        formats {
          image
          title
          ways
        }
      }
    }
  }
`;
