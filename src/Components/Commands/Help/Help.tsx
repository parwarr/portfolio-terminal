import RenderCommand from '../RenderCommand/RenderCommand';

const Help = () => {
  const commands = [
    {
      command: 'Help',
      description: 'List all commands',
    },
    {
      command: 'Clear',
      description: 'Clear the terminal screen',
    },
    {
      command: 'About',
      description: 'About me',
    },
    {
      command: 'Skills',
      description: 'My skills',
    },
    {
      command: 'Projects',
      description: 'My projects',
    },
    {
      command: 'Social',
      description: 'My social media',
    },
    {
      command: 'Contact',
      description: 'Contact me',
    },
  ];

  return (
    <>
      <RenderCommand commands={commands} />
    </>
  );
};

export default Help;
