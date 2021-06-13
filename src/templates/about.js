import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ValuesCard from "../components/ValuesCard";
import FoundersCard from "../components/FoundersCard";
import TeamCard from "../components/TeamCard";
import ContactSection from "../components/ContactSection";

import "../styles/global.scss";
import { formatParagraph, getId } from "../utils/functions";

export const AboutPageTemplate = ({
  header,
  story,
  topDividerImage,
  values,
  founders,
  bottomDividerImage,
  team,
}) => (
  <>
    <Header {...header} />
    <Tabs
      data={[story, values, founders, team].map((item) => ({
        target: `/about#${getId(item.title)}`,
        title: item.title,
      }))}
    />

    <section className="section" id={getId(story.title)}>
      <div className="container">
        <h1 className="title">{story.title}</h1>
        <div className="columns is-vcentered">
          <div className="column is-three-quarters-widescreen">
            {formatParagraph(story.description)}
          </div>
          <div className="column is-hidden-touch is-hidden-desktop-only">
            <figure className="image is-9by16">
              <img alt="" src={story.image} />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section className="hero is-medium is-relative is-clipped">
      <img alt="" className="hero-background" src={topDividerImage} />
      <div className="hero-body" />
    </section>

    <section className="section" id={getId(values.title)}>
      <div className="container">
        <h1 className="title has-text-centered">{values.title}</h1>
        <p className="subtitle has-text-centered mb-6">{values.subtitle}</p>
        <div className="columns is-multiline is-centered">
          <div className="column is-four-fifths-desktop is-two-thirds-widescreen values-column">
            {values.cards &&
              values.cards.map((item) => (
                <ValuesCard key={item.title} {...item} />
              ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section" id={getId(founders.title)}>
      <div className="container founders-container">
        <h1 className="title pb-5">{founders.title}</h1>
        {founders.cards &&
          founders.cards.map((item) => (
            <FoundersCard key={item.title} {...item} />
          ))}
      </div>
    </section>

    <section className="hero is-medium is-relative is-clipped">
      <img alt="" className="hero-background" src={bottomDividerImage} />
      <div className="hero-body" />
    </section>

    <section className="section" id={getId(team.title)}>
      <div className="container">
        <h1 className="title has-text-centered pb-5">{team.title}</h1>
        <div className="columns is-multiline is-centered">
          {team.cards &&
            team.cards.map((item) => (
              <div className="column is-one-third" key={item.title}>
                <TeamCard {...item} />
              </div>
            ))}
        </div>
      </div>
    </section>

    <ContactSection />
  </>
);

const AboutPage = ({ data }) => (
  <Layout>
    <AboutPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          title
          subtitle
        }
        story {
          image
          title
          description
        }
        topDividerImage
        values {
          title
          subtitle
          cards {
            image
            title
            subtitle
          }
        }
        founders {
          title
          cards {
            image
            title
            subtitle
            description
          }
        }
        bottomDividerImage
        team {
          title
          cards {
            image
            title
            subtitle
          }
        }
      }
    }
  }
`;
