import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SubpageBar from "../components/SubpageBar";
import Container from "../components/Container";
import ContactSection from "../components/ContactSection";
import TestimonialsCard from "../components/TestimonialsCard";
import "../pages/mystyles.scss";

const Testimonials = () => {
  return (
    <Layout>
      <Header
        title="Testimonials"
        subtitle="See what people have said about what we do"
        img="../img/testimonials-header.png"
      />
      <SubpageBar
        tab1="Leadership & Management"
        link1="#testimonials-leadership"
        tab2="Career Acceleration"
        link2="#testimonials-career"
        tab3="Personal Development"
        link3="#testimonials-development"
      />
      <Container>
        <section id="testimonials-leadership" className="section">
          <h1 className="title">Leadership & Management</h1>
          <p className="subtitle">Testimonials on leadership & management</p>
          <div className="columns">
            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>
          </div>
        </section>

        <section id="testimonials-career" className="section">
          <h1 className="title">Career Acceleration</h1>
          <p className="subtitle">Testimonials on career acceleration</p>
          <div className="columns">
            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>
          </div>
        </section>

        <section id="testimonials-development" className="section">
          <h1 className="title">Personal Development</h1>
          <p className="subtitle">Testimonials on personal development</p>
          <div className="columns">
            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content="This is my full story"
              />
            </div>
          </div>
        </section>
      </Container>
      <ContactSection />
    </Layout>
  );
};

export default Testimonials;
