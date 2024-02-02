import RenderCommand from '../RenderCommand/RenderCommand';

const Skills = () => {
  const commands = [
    {
      command: 'Programming languages / Scripting languages',
      description: 'HTML, CSS, JavaScript, TypeScript, Bash',
    },
    {
      command: 'Backend',
      description: 'Node.js, Express.js, NestJS',
    },
    {
      command: 'Frontend',
      description: 'React, Next.js, TailwindCSS',
    },
    {
      command: 'Database',
      description: 'MySQL, MariaDb',
    },
    {
      command: 'Technologies',
      description: 'Git, Docker, AWS',
    },
    {
      command: 'Languages',
      description: 'German, English',
    },
  ];

  return (
    <>
      <RenderCommand commands={commands} />
    </>
  );
};

export default Skills;
