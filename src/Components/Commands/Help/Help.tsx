import RenderCommand from '../RenderCommand/RenderCommand';

const Help = () => {
  const commands = [
    {
      command: 'help',
      description: 'List all commands',
    },
    {
      command: 'clear',
      description: 'Clear the terminal screen',
    },
    {
      command: 'about',
      description: 'About me',
    },
    {
      command: 'skills',
      description: 'My skills',
    },
    {
      command: 'projects',
      description: 'My projects',
    },
    {
      command: 'contact',
      description: 'Contact me',
    },
    {
      command: 'social',
      description: 'My social media',
    },
    {
      command: 'exit',
      description: 'Close the terminal',
    },
  ];

  return (
    <>
      <RenderCommand commands={commands} />
    </>
  );
};

export default Help;
