import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import ChevronLink from "../components/ChevronLink";
import TopicCard from "../components/TopicCard";
import ContactSection from "../components/ContactSection";

import "../styles/global.scss";
import { getId } from "../utils/functions";

export const SolutionsPageTemplate = ({ header, content }) => (
  <>
    <Helmet>
      <title>{header.title}</title>
    </Helmet>
    <Header {...header} />

    {content &&
      content.map((item, idx) => (
        <section className="section" id={getId(item.title)} key={item.title}>
          <div className="container">
            <h2 className="title">{item.title}</h2>
            <p className="subtitle">{item.subtitle}</p>
            <div className="columns is-desktop is-multiline is-centered pt-4">
              {item.cards &&
                item.cards.map((card) => (
                  <div
                    className="column is-one-third-desktop is-2-widescreen"
                    key={card.title}
                  >
                    <Link to={`/topics/${getId(card.title)}`}>
                      <TopicCard idx={idx} {...card} />
                    </Link>
                  </div>
                ))}
            </div>
            <ChevronLink to={`/solutions/${getId(item.target)}`}>
              Learn more about {item.target}
            </ChevronLink>
          </div>
        </section>
      ))}

    <ContactSection />
  </>
);

const SolutionsPage = ({ data }) => (
  <Layout>
    <SolutionsPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

export default SolutionsPage;

export const query = graphql`
  query SolutionsPage($path: String!) {
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
          target
          cards {
            image
            title
          }
        }
      }
    }
  }
`;
