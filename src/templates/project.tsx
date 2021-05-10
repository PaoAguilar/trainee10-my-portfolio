import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import { Stack } from '../types/interfaces';
import { FaShareSquare } from 'react-icons/fa';

const Project = ({ data }: any) => {
  const project = data.projectsJson;
  const { stack, url } = project;
  return (
    <>
      <section className="section projects">
        <Title title={project.title} />
        <div className="section-center projects-center">
          <article className="project">
            <GatsbyImage
              image={getImage(project.image)!}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <p>{project.description}</p>
              <div className="project-stack">
                {stack.map((item: Stack) => {
                  return <span key={item.id}>{item.title}</span>;
                })}
              </div>
              <div className="project-links">
                <a href={url} rel="noopener noreferrer" target="_blank">
                  <FaShareSquare className="project-icon"></FaShareSquare>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      slug
      url
      stack {
        id
        title
      }
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default Project;
