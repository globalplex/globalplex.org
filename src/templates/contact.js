import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Container from "../components/Container";
import "../pages/mystyles.scss";

const Contact = () => {
  return (
    <Layout>
      <Header
        title="Contact Us"
        subtitle="Drop us a line and schedule a consultation"
        img="../img/contact-header.png"
      />
      <Container>
        <section className="section">
          <div class="content">
            <div class="columns is-vcentered">
              <div class="column is-7">
                <p class="subtitle is-5 has-text-weight-semibold">
                  We would love to talk and get to know you and your team!
                </p>
                <p>Leave your info and message below to get started</p>
                <br />
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Your name" />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Company / Organization</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Drop us a line!"
                    ></textarea>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                </div>
              </div>
              <div class="column is-1" />
              <div class="column">
                <div class="card">
                  <div class="card-content">
                    <h3 class="title">Some questions you could ask</h3>
                    <br />
                    <p class="subtitle">
                      What does a customized training look like for my
                      organization's needs?
                    </p>
                    <p class="subtitle">
                      How does a typical training session look like?
                    </p>
                    <p class="subtitle">
                      What are you going to help me and my team discover and
                      develop our potential?
                    </p>
                    <p class="subtitle">
                      What curriculum or training would be covered for the
                      various topics?
                    </p>
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

export default Contact;
