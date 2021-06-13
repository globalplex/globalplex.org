import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import "../pages/mystyles.scss";

export const ContactPageTemplate = ({ title, subtitle, sampleQuestions }) => (
  <>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-half-desktop">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <div className="field">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <div className="control">
                  <input
                    className="input"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="organization">
                  Company / Organization
                </label>
                <div className="control">
                  <input
                    className="input"
                    id="organization"
                    name="organization"
                    placeholder="Your Organization"
                    type="text"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="message">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    id="message"
                    name="message"
                    placeholder="Drop us a line!"
                  />
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
          <div className="column" />
          <div className="column is-half-desktop is-two-fifths-widescreen">
            <div className="section">
              <h2 className="title has-text-dark">{sampleQuestions.title}</h2>
              {sampleQuestions.questions &&
                sampleQuestions.questions.map((item) => (
                  <p key={item}>{item}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ContactPage = ({ data }) => (
  <Layout>
    <ContactPageTemplate {...data.markdownRemark.frontmatter} />
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        subtitle
        sampleQuestions {
          title
          questions
        }
      }
    }
  }
`;
