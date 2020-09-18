import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Container from "../components/Container";
import "../pages/mystyles.scss";

const ContactPage = ({ data }) => {
  const { title, blurb, sampleQuestions } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <p>{blurb}</p>
          </div>
        </div>
      </section>
      <Container>
        <section className="section">
          <div className="content">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        name="name"
                        placeholder="Your Name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        name="email"
                        placeholder="Your Email"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Company / Organization</label>
                    <div className="control">
                      <input
                        className="input"
                        name="organization"
                        placeholder="Your Organization"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="Drop us a line!"
                      ></textarea>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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
