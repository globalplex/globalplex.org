import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ContactSection from "../components/ContactSection";
import ValuesCard from "../components/ValuesCard";

import "../pages/mystyles.scss";
import FoundersCard from "../components/FoundersCard";
import TeamCard from "../components/TeamCard";

const AboutPage = ({ data }) => {
  const {
    title,
    blurb,
    image,
    story,
    topSeparatorImg,
    values,
    founders,
    bottomSeparatorImg,
    team,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Header title={title} subtitle={blurb} backgroundImage={image} />
      <Tabs
        data={[
          { target: "#about-story", title: "Our Story" },
          { target: "#about-founders", title: "Our Founders" },
          { target: "#about-values", title: "Our Values" },
          { target: "#about-team", title: "Our Team" },
        ]}
      />

      <section id="about-story" className="section">
        <div className="container">
          <h1 className="title">{story.title}</h1>
          <div className="columns is-vcentered">
            <div className="column is-two-thirds-desktop is-three-quarters-widescreen">
              <p>{story.description}</p>
            </div>
            <div className="column is-hidden-touch">
              <figure className="image is-3by5">
                <img src={story.image} alt="About Story" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-medium is-relative is-clipped">
        <img className="hero-background" src={topSeparatorImg} />
        <div className="hero-body" />
      </section>

      <section className="has-background-white has-text-black">
        <div id="about-values" className="section">
          <div className="container">
            <h1 className="title is-spaced">{values.title}</h1>
            <h2 className="subtitle has-text-centered mb-6">{values.blurb}</h2>
            <div className="columns is-multiline is-centered">
              <div className="column is-four-fifths-desktop is-two-thirds-widescreen values-column">
                {values.content.map((item) => (
                  <ValuesCard
                    backgroundImage={item.image}
                    subtitle={item.description}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-founders" className="section">
        <div className="container founders-container">
          <h1 className="title pb-5">{founders.title}</h1>
          {founders.content.map((item) => (
            <FoundersCard
              description={item.description}
              image={item.image}
              subtitle={item.position}
              title={item.name}
            />
          ))}
        </div>
      </section>

      <section className="hero is-medium is-relative is-clipped">
        <img className="hero-background" src={bottomSeparatorImg} />
        <div className="hero-body" />
      </section>

      <section id="about-team" className="section">
        <div className="container">
          <h1 className="title pb-5">{team.title}</h1>
          <div className="columns is-multiline">
            {team.content.map((item) => (
              <div class="column is-half">
                <TeamCard
                  image={item.image}
                  subtitle={item.position}
                  title={item.name}
                />
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
        title
        blurb
        image
        story {
          title
          image
          description
        }
        topSeparatorImg
        values {
          title
          blurb
          content {
            image
            title
            description
          }
        }
        founders {
          title
          content {
            name
            position
            image
            description
          }
        }
        bottomSeparatorImg
        team {
          title
          content {
            name
            position
            image
          }
        }
      }
    }
  }
`;
