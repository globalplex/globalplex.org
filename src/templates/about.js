import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ValuesCard from "../components/ValuesCard";
import FoundersCard from "../components/FoundersCard";
import TeamCard from "../components/TeamCard";
import ContactSection from "../components/ContactSection";
import "../pages/mystyles.scss";
import { formatParagraph, getId } from "../utils/functions";

const AboutPage = ({ data }) => {
  const {
    header,
    story,
    topDividerImage,
    values,
    founders,
    bottomDividerImage,
    team,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Header {...header} />
      <Tabs
        data={[
          {
            target: `/about#${getId(story.title)}`,
            title: story.title,
          },
          {
            target: `/about#${getId(founders.title)}`,
            title: founders.title,
          },
          {
            target: `/about#${getId(values.title)}`,
            title: values.title,
          },
          {
            target: `/about#${getId(team.title)}`,
            title: team.title,
          },
        ]}
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
          <h1 className="title is-spaced">{values.title}</h1>
          <p className="subtitle has-text-centered mb-6">{values.subtitle}</p>
          <div className="columns is-multiline is-centered">
            <div className="column is-four-fifths-desktop is-two-thirds-widescreen values-column">
              {values.cards.map((item) => (
                <ValuesCard {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id={getId(founders.title)}>
        <div className="container founders-container">
          <h1 className="title pb-5">{founders.title}</h1>
          {founders.cards.map((item) => (
            <FoundersCard {...item} />
          ))}
        </div>
      </section>

      <section className="hero is-medium is-relative is-clipped">
        <img alt="" className="hero-background" src={bottomDividerImage} />
        <div className="hero-body" />
      </section>

      <section className="section" id={getId(team.title)}>
        <div className="container">
          <h1 className="title pb-5">{team.title}</h1>
          <div className="columns is-multiline">
            {team.cards.map((item) => (
              <div class="column is-half">
                <TeamCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

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
