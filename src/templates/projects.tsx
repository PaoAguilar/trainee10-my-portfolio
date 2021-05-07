import React from 'react';

const Projects = ({ pageContext }: any) => {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <img src={pageContext.image} alt={pageContext.title} />
      <div>{pageContext.description}</div>
    </div>
  );
};

export default Projects;
