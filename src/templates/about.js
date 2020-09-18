import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SubpageBar from "../components/SubpageBar";
import Container from "../components/Container";
import ContactSection from "../components/ContactSection";
import ValuesCard from "../components/ValuesCard";

import "../pages/mystyles.scss";
import ProfileCard from "../components/ProfileCard";

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
      <Header title={title} subtitle={blurb} img={image} />
      <SubpageBar
        tab1="Our Story"
        link1="#about-story"
        tab2="Our Founders"
        link2="#about-founders"
        tab3="Our Values"
        link3="#about-values"
        tab4="Our Team"
        link4="#about-team"
      />
      <Container>
        <div id="about-story" className="section">
          <div className="columns">
            <div className="column is-two-thirds">
              <h1 className="title">{story.title}</h1>
              <p>{story.description}</p>
            </div>
            <div className="column">
              <figure className="image">
                <img src={story.image} alt="About Story" />
              </figure>
            </div>
          </div>
        </div>
      </Container>

      <figure className="image">
        <img
          className="is-fullwidth"
          src={topSeparatorImg}
          style={{ marginBottom: 0 }}
          alt="About"
        />
      </figure>

      <div className="has-background-white has-text-black">
        <Container>
          <div id="about-values" className="section">
            <h1 className="title">{values.title}</h1>
            <h2 className="subtitle has-text-centered">{values.blurb}</h2>
            <br />
            {values.content.map((item) => (
              <ValuesCard title={item.title} subtitle={item.description} />
            ))}
          </div>
        </Container>
      </div>

      <div className="has-background-light has-text-black">
        <Container>
          <div id="about-founders" className="section">
            <h1 className="title">{founders.title}</h1>
            <br />
            {founders.content.map((item) => (
              <ProfileCard
                img={item.image}
                name={item.name}
                position={item.position}
                bio={item.description}
              />
            ))}
          </div>
        </Container>
      </div>

      <figure className="image">
        <img
          className="is-fullwidth"
          src={bottomSeparatorImg}
          style={{ marginBottom: 0 }}
          alt="About"
        />
      </figure>

      <Container>
        <div id="about-founders" className="section">
          <h1 className="title">{team.title}</h1>
          <br />
          <div className="columns">
            {team.content.map((item) => (
              <div className="column">
                <ProfileCard
                  img="../img/github-icon.svg"
                  name={item.name}
                  position={item.position}
                  bio={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
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
            description
          }
        }
      }
    }
  }
`;
