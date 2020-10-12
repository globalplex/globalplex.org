import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import TestimonialsCard from "../components/TestimonialsCard";
import ContactSection from "../components/ContactSection";
import "../pages/mystyles.scss";
import { getId } from "../utils/functions";

const TestimonialsPage = ({ data }) => {
  const { header, content } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Header {...header} />
      <Tabs
        data={content.map((item) => ({
          target: `/testimonials#${getId(item.title)}`,
          title: item.title,
        }))}
      />

      <section>
        {content.map((item) => (
          <div className="section" id={getId(item.title)}>
            <div className="container">
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">{item.subtitle}</p>
              <div className="columns">
                {item.testimonials.map((testimonial) => (
                  <div className="column testimonial-column">
                    <TestimonialsCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <ContactSection />
    </Layout>
  );
};

export default TestimonialsPage;

export const query = graphql`
  query TestimonialsPage($path: String!) {
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
          testimonials {
            image
            name
            title
            subtitle
            blurb
            description
          }
        }
      }
    }
  }
`;
