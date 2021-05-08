const projects = require('./src/data/projects.json');

exports.createPages = ({ actions: { createPage } }) => {
  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: require.resolve('./src/templates/project.tsx'),
      context: {
        title: project.title,
        description: project.description,
        image: project.image,
      }, //es como gatsby pasa la data en el componente
    });
  });
};
