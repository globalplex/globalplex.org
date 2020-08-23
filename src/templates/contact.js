import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Container from "../components/Container";
import "../pages/mystyles.scss";

const ContactPage = ({ data }) => {
  const { title, blurb, sampleQuestions } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <section style={{ paddingTop: "3rem" }}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
      <Container>
        <section className="section">
          <div className="content">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <p>{blurb}</p>
                <br />
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Company / Organization</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Drop us a line!"
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                </div>
              </div>
              <div className="column is-1" />
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title">{sampleQuestions.title}</h3>
                    <br />
                    {sampleQuestions.questions.map((item) => (
                      <p className="subtitle">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        blurb
        sampleQuestions {
          title
          questions
        }
        faqTitle
        faq {
          question
          answer
        }
      }
    }
  }
`;
