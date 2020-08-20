import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import ContactSection from "../components/ContactSection";
import "../pages/mystyles.scss";
import Container from "../components/Container";
import TestimonialsCard from "../components/TestimonialsCard";
import ContentCard from "../components/ContentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

const Home = () => {
  return (
    <Layout>
      <section
        className="hero is-dark is-bold is-large is-fullheight"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(../img/home-cover.jpg)`,
        }}
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-left">
              Discover and Develop your Potential
            </h1>
            <h2 className="subtitle has-text-left">
              Our mission is to effectively{" "}
              <span style={{ color: "#F18B15" }}>equip</span> people to{" "}
              <span style={{ color: "#F18B15" }}>excel</span> in life and{" "}
              <span style={{ color: "#F18B15" }}>expand</span> their influence
            </h2>
            <Link to="/contact/">
              <button class="button is-outlined is-primary is-medium has-text-weight-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer section */}
      <section class="section is-medium">
        <div class="container">
          <p class="subtitle">WHAT WE OFFER</p>
          <h2 class="title">Training the next generation of leaders</h2>
          <br />
          <br />
          <div className="columns is-vcentered">
            <div className="column">
              <figure class="image">
                <img src={"../img/home-offer.png"} alt="About Founders" />
              </figure>
            </div>
            <div className="column is-1" />
            <div className="column is-half">
              <Link to="/services/">
                <div class="box">
                  <div class="section" style={{ padding: "1.5rem" }}>
                    <div className="columns is-vcentered">
                      <div className="column is-11">
                        <p className="is-1 has-text-weight-bold	has-text-black">
                          Leadership & Management
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <div className="column is-1 is-hidden-mobile">
                        <FontAwesomeIcon
                          icon="chevron-right"
                          style={{ color: "#F18B15" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <br />
              <Link to="/services#services-leadership/">
                <div class="box">
                  <div class="section" style={{ padding: "1.5rem" }}>
                    <div className="columns is-vcentered">
                      <div className="column is-11">
                        <p className="is-1 has-text-weight-bold	has-text-black">
                          Career Acceleration
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <div className="column is-1 is-hidden-mobile">
                        <FontAwesomeIcon
                          icon="chevron-right"
                          style={{ color: "#F18B15" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <br />
              <Link to="/services#career/">
                <div class="box">
                  <div class="section" style={{ padding: "1.5rem" }}>
                    <div className="columns is-vcentered">
                      <div className="column is-11">
                        <p className="is-1 has-text-weight-bold	has-text-black">
                          Personal Development
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <div className="column is-1 is-hidden-mobile">
                        <FontAwesomeIcon
                          icon="chevron-right"
                          style={{ color: "#F18B15" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach section */}
      <section class="section is-medium has-background-light">
        <div class="container">
          <p class="subtitle">OUR APPROACH</p>
          <h2 class="title">Training in multiple levels</h2>
          <br />
          <br />
          <div className="columns">
            <div className="column">
              <ContentCard
                img="../img/testimonials-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/testimonials-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>

            <div className="column">
              <ContentCard
                img="../img/testimonials-header.png"
                title="Effectively Equipping"
                subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
              />
            </div>
          </div>
          <br />
          <br />
          <div class="has-text-right">
            <Link to="/contact/">
              <button class="button is-outlined is-primary is-medium">
                Contact us to learn more
                <br />
                <span class="icon is-small">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#F18B15" }}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Stories section */}
      <section class="section is-medium">
        <div class="container">
          <p class="subtitle">CUSTOMER STORIES</p>
          <h2 class="title">Join the leaders impacting tomorrow’s world</h2>
          <br />
          <br />
          <div className="columns">
            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content=""
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content=""
              />
            </div>

            <div className="column">
              <TestimonialsCard
                name="Bob"
                title="HMCC"
                blurb="I discovered my potential and my life was transformed!"
                content=""
              />
            </div>
          </div>
          <br />
          <br />
          <div class="has-text-right">
            <Link to="/testimonials/">
              <button class="button is-outlined is-primary is-medium">
                See more customer stories
                <br />
                <span class="icon is-small">
                  <FontAwesomeIcon
                    icon="chevron-right"
                    style={{ color: "#F18B15" }}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default Home;
