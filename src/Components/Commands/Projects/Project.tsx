import RenderCommand from '../RenderCommand/RenderCommand';

const Projects = () => {
  const ProjectsCommand = [
    {
      command: 'Yu-Gi-Oh Card Database',
      description: 'https://github.com/parwarr/yugioh-search-engine-demo-frontend',
      url: 'https://github.com/parwarr/yugioh-search-engine-demo-frontend',
    },
    {
      command: 'Docker Containers',
      description: 'https://github.com/parwarr/docker-container ',
      url: 'https://github.com/parwarr/docker-container',
    },
    {
      command: 'Weather App',
      description: 'https://github.com/parwarr/weather-app',
      url: 'https://github.com/parwarr/weather-app',
    },
    {
      command: 'Password Manager',
      description: 'https://github.com/parwarr/password-manager',
      url: 'https://github.com/parwarr/password-manager',
    },
  ];
  return (
    <>
      <RenderCommand commands={ProjectsCommand} />
    </>
  );
};

export default Projects;
