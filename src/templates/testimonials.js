import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import TestimonialsCard from "../components/TestimonialsCard";
import ContactSection from "../components/ContactSection";

import "../styles/global.scss";
import { getId } from "../utils/functions";

export const TestimonialsPageTemplate = ({ header, content }) => (
  <>
    <Helmet>
      <title>{header.title}</title>
    </Helmet>
    <Header {...header} />
    <Tabs
      data={
        content &&
        content.map((item) => ({
          target: `/testimonials#${getId(item.title)}`,
          title: item.title,
        }))
      }
    />

    <section>
      {content &&
        content.map((item) => (
          <div className="section" id={getId(item.title)} key={item.title}>
            <div className="container">
              <h2 className="title">{item.title}</h2>
              <p className="subtitle">{item.subtitle}</p>
              <div className="columns testimonial-columns">
                {item.testimonials &&
                  item.testimonials.map((testimonial) => (
                    <div
                      className="column testimonial-column"
                      key={testimonial.name}
                    >
                      <TestimonialsCard {...testimonial} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </section>

    <ContactSection />
  </>
);

const TestimonialsPage = ({ data }) => (
  <Layout>
    <TestimonialsPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

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
