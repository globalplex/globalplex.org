import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SubpageBar from "../components/SubpageBar";
import Container from "../components/Container";
import ContactSection from "../components/ContactSection";
import ContentCard from "../components/ContentCard";
import OfferFormatImg from "../img/offer-format.png";
import "../pages/mystyles.scss";

const Services = () => {
  return (
    <Layout>
      <Header
        title="What We Offer"
        subtitle="Training to help you Discover and Develop your potential"
        img="../img/offer-header.png"
      />
      <SubpageBar
        tab1="Leadership & Management"
        link1="#services-leadership"
        tab2="Career Acceleration"
        link2="#services-career"
        tab3="Personal Development"
        link3="#services-development"
      />
      <Container>
        <section id="services-leadership" className="section">
          <h1 className="title has-text-primary">Leadership & Management</h1>
          <p className="subtitle">
            Skills to help you be a leader others want to follow
          </p>
          <div className="columns">
            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>
          </div>
        </section>

        <section id="services-career" className="section">
          <h1 className="title has-text-primary">Career Acceleration</h1>
          <p className="subtitle">
            Skills to help you be a leader others want to follow
          </p>
          <div className="columns">
            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>
          </div>
        </section>

        <section id="services-development" className="section">
          <h1 className="title has-text-primary">Personal Development</h1>
          <p className="subtitle">
            Skills to help you be a leader others want to follow
          </p>
          <div className="columns">
            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/about-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>
          </div>
        </section>
        <br />
      </Container>

      <div className="has-background-dark has-text-light">
        <div class="columns is-vcentered">
          <div style={{ paddingTop: "0" }} class="column is-half">
            <figure class="image">
              <img
                style={{ marginBottom: "0" }}
                src={OfferFormatImg}
                alt="Offer Format"
              />
            </figure>
          </div>
          <div class="column is-half">
            <h3 className="title is-3 has-text-light">
              Customizable training available in multiple formats
            </h3>
            <br />
            <p class="subtitle is-5 has-text-light">1. In Person</p>
            <p class="subtitle is-5 has-text-light">2. On Site</p>
            <p class="subtitle is-5 has-text-light">3. Training Consultation</p>
          </div>
          <div class="column is-1" />
        </div>
      </div>

      <ContactSection />
    </Layout>
  );
};

export default Services;
