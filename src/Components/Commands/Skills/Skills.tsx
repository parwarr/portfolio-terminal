const Skills = () => {
  const commands = [
    {
      command: 'JavaScript',
      description: 'ES6, TypeScript',
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
      <div className='container '>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-2xl font-bold'>Skills</p>
            <div className='flex flex-col items-center justify-center'>
              {commands.map((command, index) => (
                <div
                  key={index}
                  className='flex flex-row items-center justify-center'
                >
                  <p className='text-white text-2xl font-bold'>
                    {command.command + ' '}
                  </p>
                  <p className='text-white text-2xl font-bold'>
                    - {command.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
