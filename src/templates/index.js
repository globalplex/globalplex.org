import React from "react";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import IndexSection from "../components/IndexSection";
import ChevronLink from "../components/ChevronLink";
import IndexServicesCard from "../components/IndexServicesCard";
import VerticalServicesCard from "../components/VerticalServicesCard";
import BlogCard from "../components/BlogCard";
import TestimonialsCard from "../components/TestimonialsCard";

import "../styles/global.scss";
import "../utils/fontawesome";
import { getId } from "../utils/functions";

export const IndexPageTemplate = ({
  header,
  services,
  approach,
  blog,
  blogEdges,
  testimonials,
  consult,
}) => (
  <>
    <header className="hero is-large has-background-dark is-relative is-clipped">
      <img
        alt=""
        className="hero-background is-transparent"
        src={header.image}
      />
      <div className="hero-body">
        <div className="container py-6">
          <div className="columns has-text-centered-mobile">
            <div className="column is-four-fifths is-half-widescreen">
              <p className="title is-1 is-spaced has-text-weight-light has-text-light">
                {header.title}
              </p>
              <p className="subtitle has-text-light pb-2">{header.subtitle}</p>
              <Link
                className="button is-primary is-uppercase has-text-weight-bold px-5 py-5"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <IndexSection subtitle={services.subtitle} title={services.title}>
      <div className="columns is-desktop is-vcentered">
        <div className="column is-hidden-touch is-one-third-fullhd">
          <figure className="image is-square">
            <img alt="" src={services.image} />
          </figure>
        </div>
        <div className="column index-services-column">
          {services.content &&
            services.content.map((item) => (
              <div key={item.title}>
                <Link to={`/services#${getId(item.title)}`}>
                  <IndexServicesCard {...item} />
                </Link>
              </div>
            ))}
        </div>
      </div>
      <ChevronLink to="/services">View all our services</ChevronLink>
    </IndexSection>

    <IndexSection subtitle={approach.subtitle} title={approach.title}>
      <div className="columns">
        {approach.content &&
          approach.content.map((item) => (
            <div className="column" key={item.title}>
              <VerticalServicesCard {...item} />
            </div>
          ))}
      </div>
      <ChevronLink to="/contact">Contact us to learn more</ChevronLink>
    </IndexSection>

    <IndexSection subtitle={blog.subtitle} title={blog.title}>
      <div className="columns">
        {blogEdges &&
          blogEdges.map(({ node }) => (
            <div className="column" key={node.uniqueSlug}>
              <a href={`https://medium.com/globalplex/${node.uniqueSlug}`}>
                <BlogCard
                  image={`https://miro.medium.com/${node.virtuals.previewImage.imageId}`}
                  name={node.author.name}
                  subtitle={node.virtuals.subtitle}
                  title={node.title}
                  updatedAt={node.updatedAt}
                />
              </a>
            </div>
          ))}
      </div>
      <a
        className="is-flex is-justify-content-flex-end"
        href="https://medium.com/globalplex"
      >
        Explore our blog
        <span className="icon">
          <FontAwesomeIcon icon="chevron-right" />
        </span>
      </a>
    </IndexSection>

    <IndexSection subtitle={testimonials.subtitle} title={testimonials.title}>
      <div className="columns testimonial-columns">
        {testimonials.content &&
          testimonials.content.map((item) => (
            <div className="column testimonial-column" key={item.name}>
              <TestimonialsCard {...item} />
            </div>
          ))}
      </div>
      <ChevronLink to="/testimonials">See more testimonials</ChevronLink>
    </IndexSection>

    <section className="section">
      <div className="container">
        <div className="box has-background-dark">
          <div className="section">
            <div className="columns is-desktop is-vcentered px-4">
              <div className="column is-two-thirds-desktop is-three-fifths-widescreen">
                <p className="title is-2 has-text-light">{consult.title}</p>
                <p className="has-text-light">{consult.subtitle}</p>
              </div>
              <div className="column" />
              <div className="column is-narrow has-text-right">
                <Link
                  className="button is-primary is-uppercase has-text-weight-bold px-5 py-5"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const IndexPage = ({ data }) => (
  <Layout>
    <IndexPageTemplate
      blogEdges={data.allMediumPost.edges}
      {...data.markdownRemark.frontmatter}
    />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        header {
          image
          title
          subtitle
        }
        services {
          image
          title
          subtitle
          content {
            title
            subtitle
          }
        }
        approach {
          title
          subtitle
          content {
            image
            title
            subtitle
          }
        }
        blog {
          title
          subtitle
        }
        testimonials {
          title
          subtitle
          content {
            image
            name
            title
            subtitle
            blurb
            description
          }
        }
        consult {
          title
          subtitle
        }
      }
    }
    allMediumPost(limit: 3, sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
          updatedAt(difference: "days", fromNow: true)
          uniqueSlug
        }
      }
    }
  }
`;
