import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SubpageBar from "../components/SubpageBar";
import Container from "../components/Container";
import ContactSection from "../components/ContactSection";
import TestimonialsCard from "../components/TestimonialsCard";
import "../pages/mystyles.scss";

const TestimonialsPage = ({ data }) => {
  const { title, blurb, image, content } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Header title={title} subtitle={blurb} img={image} />
      <SubpageBar
        tab1="Leadership & Management"
        link1="#testimonials-leadership"
        tab2="Career Acceleration"
        link2="#testimonials-career"
        tab3="Personal Development"
        link3="#testimonials-development"
      />
      <Container>
        {content.map((item) => (
          <section id={item.id} className="section">
            <h1 className="title">{item.title}</h1>
            <p className="subtitle">{item.blurb}</p>
            <div className="columns">
              {item.testimonials.map((subitem) => (
                <div className="column">
                  <TestimonialsCard
                    name={subitem.name}
                    title={subitem.title}
                    blurb={subitem.blurb}
                    content={subitem.description}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </Container>
      <ContactSection />
    </Layout>
  );
};

export default TestimonialsPage;

export const query = graphql`
  query TestimonialsPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        blurb
        image
        content {
          title
          id
          blurb
          testimonials {
            image
            name
            title
            subtitle
            blurb
            description
          }
        }
        clients {
          title
          blurb
          image
        }
      }
    }
  }
`;
