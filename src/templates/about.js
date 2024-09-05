import React from "react";
import { Helmet } from "react-helmet";
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
    <Helmet>
      <title>{header.title}</title>
    </Helmet>
    <Header {...header} />
    <Tabs
      data={[story, values, founders, team].map((item) => ({
        target: `/about#${getId(item.title)}`,
        title: item.title,
      }))}
    />

    <section className="section" id={getId(story.title)}>
      <div className="container">
        <h2 className="title">{story.title}</h2>
        <div className="columns is-vcentered">
          <div className="column is-three-quarters-widescreen content">
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

    <div className="hero is-medium is-relative is-clipped">
      <img alt="" className="hero-background" src={topDividerImage} />
      <div className="hero-body" />
    </div>

    <section className="section" id={getId(values.title)}>
      <div className="container">
        <h2 className="title has-text-centered">{values.title}</h2>
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
        <h2 className="title pb-5">{founders.title}</h2>
        {founders.cards &&
          founders.cards.map((item) => (
            <FoundersCard key={item.title} {...item} />
          ))}
      </div>
    </section>

    <div className="hero is-medium is-relative is-clipped">
      <img alt="" className="hero-background" src={bottomDividerImage} />
      <div className="hero-body" />
    </div>

    <section className="section" id={getId(team.title)}>
      <div className="container">
        <h2 className="title has-text-centered pb-5">{team.title}</h2>
        <div className="columns is-centered">
          {team.topCards &&
            team.topCards.map((item) => (
              <div className="column is-one-quarter" key={item.title}>
                <TeamCard {...item} />
              </div>
            ))}
        </div>
        <div className="columns is-centered">
          {team.bottomCards &&
            team.bottomCards.map((item) => (
              <div className="column is-one-quarter" key={item.title}>
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
          topCards {
            image
            title
            subtitle
          }
          bottomCards {
            image
            title
            subtitle
          }
        }
      }
    }
  }
`;
