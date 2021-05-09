import Title from '../components/Title';
import React, { useEffect, useState } from 'react';
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
  console.log(projects);

  const [projectList, setProjectList] = useState<Project[]>(projects);

  const filterProjectsByTag = (selectedTag: string) => {
    const filteredProjects = projects.filter((project) => {
      let match = false;
      project.stack.map((tag) => {
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
          return <span key={index} onClick={() => {
            filterProjectsByTag(`${tag}`)
          }}>{tag}</span>;
        })}
      </div>
      <div className="section-center projects-center">
        {projectList.map((project: Project, index: number) => {
          // console.log(project);
          const { id, title, slug, description, stack, url, image } = project;
          return (
            <div key={id}>
              <article className="project">
                <GatsbyImage image={getImage(image)} alt={title} className="project-img" />
                <div className="project-info">
                  <span className="project-number">{index + 1}</span>
                  <Link to={`/projects/${slug}`} className="project-slug">
                    <h3>{title}</h3>
                  </Link>
                  <p className="project-desc">{description}</p>
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
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
