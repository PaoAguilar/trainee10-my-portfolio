import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const Project = ({ data }: any) => {
  const project = data.projectsJson;
  return (
    <>
      <main className="project-template-page">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <GatsbyImage image={getImage(project.image)} alt={project.title}/>
      </main>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      slug
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default Project;
