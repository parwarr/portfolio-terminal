import RenderCommand from '../RenderCommand/RenderCommand';

const Skills = () => {
  const commands = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'NestJS',
    'MongoDB',
    'Firebase',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'GitLab',
    'Jira',
    'Confluence',
    'Bitbucket',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'AWS',
    'Azure',
    'Google Cloud',
    'Linux',
    'Windows',
    'MacOS',
  ];

  return (
    <>
      <RenderCommand commands={commands} />
    </>
  );
};

export default Skills;
