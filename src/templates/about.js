import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import SubpageBar from "../components/SubpageBar";
import Container from "../components/Container";
import ContactSection from "../components/ContactSection";
import ValuesCard from "../components/ValuesCard";
import AboutDividerImg from "../img/about-divider.png";
import AboutDivider2Img from "../img/about-divider-2.png";
import AboutStoryImg from "../img/about-story.png";

import "../pages/mystyles.scss";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <Layout>
      <Header
        title="About Us"
        subtitle="Meet the people and the values that drive us to do what we do"
        img="../img/about-header.png"
      />
      <SubpageBar
        tab1="Our Story"
        link1="#about-story"
        tab2="Our Founders"
        link2="#about-founders"
        tab3="Our Values"
        link3="#about-values"
        tab4="Our Team"
        link4="#about-team"
      />
      <Container>
        <div id="about-story" className="section">
          <div className="columns">
            <div className="column is-two-thirds">
              <h1 class="title has-text-primary">Our Story</h1>
              <p>
                Globalplex began with a vision. Our two founders etc etc etc.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu porttitor turpis. Quisque eget lectus metus. In
                tempus tempus augue, id feugiat neque sodales et. Aliquam vitae
                mauris non lectus lobortis venenatis. Donec sed arcu placerat,
                vulputate orci a, tempor metus. Praesent aliquet porta ligula, a
                porta nisl placerat eget. Quisque placerat imperdiet est vitae
                facilisis.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu porttitor turpis. Quisque eget lectus metus. In
                tempus tempus augue, id feugiat neque sodales et. Aliquam vitae
                mauris non lectus lobortis venenatis. Donec sed arcu placerat,
                vulputate orci a, tempor metus. Praesent aliquet porta ligula, a
                porta nisl placerat eget. Quisque placerat imperdiet est vitae
                facilisis.
              </p>
            </div>
            <div className="column">
              <figure class="image">
                <img src={AboutStoryImg} alt="About Story" />
              </figure>
            </div>
          </div>
        </div>
      </Container>

      <figure class="image">
        <img
          className="is-fullwidth"
          src={AboutDividerImg}
          style={{ marginBottom: 0 }}
          alt="About"
        />
      </figure>

      <div className="has-background-white has-text-black">
        <Container>
          <div id="about-values" className="section">
            <h1 class="title has-text-centered has-text-primary">Our Values</h1>
            <h2 class="subtitle has-text-centered">
              The values that guide us in everything that we do
            </h2>
            <br />

            <ValuesCard
              title="Effectively Equipping"
              subtitle="Our approach is to effectively equip and empower each individual through personal coaching, consistent consultation, and goal-setting accoutability"
            />
            <br />
            <ValuesCard
              title="Excel in Life"
              subtitle="Our carefully tailored development services enable you to reach your full potential and help you achieve greater performance and results"
            />
            <br />
            <ValuesCard
              title="Expanding Your Influence"
              subtitle="Our program helps you expand your influence and develop life-long impact within your organization"
            />
            <br />
          </div>
        </Container>
      </div>

      <div className="has-background-light has-text-black">
        <Container>
          <div id="about-founders" className="section">
            <h1 class="title has-text-primary">Our Founders</h1>
            <br />
            <ProfileCard
              img="../img/profile-seth.png"
              name="Dr. Seth Kim"
              position="CEO"
              bio="Dr. Kim has started multiple organizations and is on various
              executive boards and has key leadership roles in helping to
              lead, guide, and expand the organizational influence and
              impact. He is a motivational speaker, leadership educator, a
              people developer and equipper, and organizational entrepreneur
              who loves to help people engineer a vision for their lives to
              make an impact in their sphere of influence."
              bio2="He has traveled extensively around the world to work with
              different organizations to train and equip people to live life
              with purpose, destiny, and influence. His 28+ years of
              experience in working with people and conducting training
              programs for organizations extends to over 30 nations."
              bio3="Dr. Kim holds multiple degrees including B.S. in Psychology
              and Sociology, M.A., and D.Min"
            />
            <br />
            <ProfileCard
              img="../img/profile-joanna.png"
              name="Joanna Jing"
              position="COO"
              bio="Joanna has extensive experience in working with young adults in areas of character development,  leadership training and professionalism. She has mentored hundreds of university students and young adults over the past six years."
              bio2="She also specializes in corporate change management and efficiency transformation, with experience spanning across corporates such as EY, Citibank, and MetLife."
              bio3="Joanna holds a MSc. in Operational Research from The Polytechnic University of Hong Kong, and B.S. degrees in Financial Mathematics as well as Economics from the University of Michigan."
            />
          </div>
        </Container>
      </div>

      <figure class="image">
        <img
          className="is-fullwidth"
          src={AboutDivider2Img}
          style={{ marginBottom: 0 }}
          alt="About"
        />
      </figure>

      <Container>
        <div id="about-founders" className="section">
          <h1 class="title has-text-primary">Our Team</h1>
          <br />
          <div className="columns">
            <div className="column">
              <ProfileCard
                img="../img/github-icon.svg"
                name="Jacky Lee"
                position="Hacker"
                bio="Professional hacker"
              />
            </div>
            <div className="column">
              <ProfileCard
                img="../img/github-icon.svg"
                name="Angelica Kosasih"
                position="Hipster"
                bio="A born again hipster"
              />
            </div>
          </div>
        </div>
      </Container>
      <ContactSection />
    </Layout>
  );
};

export default About;
