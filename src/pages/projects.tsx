import Title from '../components/Title';
import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaShareSquare } from 'react-icons/fa';
import { Project, Stack } from '../types/interfaces';
import { tags } from '../constants/tags';

const Projects = () => {
  const project = useStaticQuery(
    graphql`
      {
        allProjectsJson {
          nodes {
            id
            title
            slug
            description
            stack {
              id
              title
            }
            url
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
          totalCount
        }
      }
    `,
  );
  //Accesing the JSON data
  const {
    allProjectsJson: { nodes: projects },
  } = project;

  const [projectList, setProjectList] = useState<Project[]>(projects);
  
  const filterByTag = (selectedTag: string) => {
    let match = false;
    const filteredProjects = projects.filter((project:Project) => {
      project.stack.map((tag: Stack) => {
        if (tag.title === selectedTag) match = true;
      });
      return match;
    });
    setProjectList(filteredProjects);    
  };

  return (
    <section className="section projects">
      <Title title="all my projects" />
      <div className="section-center project-stack">
        <h3>You can click a tag to search projects</h3>
        {tags.map((tag, index) => {
          return <span style={{cursor: "pointer"}} key={index} onClick={() => {
            filterByTag(`${tag}`)
          }}>{tag}</span>;
        })}
      </div>
      <div className="section-center projects-center">
        {projectList.map((project: Project, index: number) => {
          const { id, title, slug, description, stack, url, image } = project;
          return (
            <div key={id}>
              <article className="project">
                <GatsbyImage image={getImage(image)!} alt={title} className="project-img" />
                <div className="project-info">
                  <span className="project-number">{index + 1}</span>
                  <Link to={`/projects/${slug}`} className="project-slug">
                    <h3>{title}</h3>
                  </Link>
                  <p className="project-desc">{description}</p>
                  <div className="project-stack">
                    {stack.map((item) => {
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
