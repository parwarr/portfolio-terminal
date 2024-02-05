import KeyboardShortcuts from '../KeyboardShortcuts/KeyboardShortcuts';
import RenderCommand from '../RenderCommand/RenderCommand';

const Help = () => {
  const commands = [
    {
      command: 'help',
      description: 'list all available commands',
    },
    {
      command: 'clear',
      description: 'clear the terminal screen',
    },
    {
      command: 'about',
      description: 'get to know more about me',
    },
    {
      command: 'skills',
      description: 'get a list of my skills',
    },
    {
      command: 'projects',
      description: 'get a list of my projects',
    },
    {
      command: 'socials',
      description: 'get a list of my social media accounts',
    },
    {
      command: 'contact',
      description: 'get in contact with me!',
    },
    {
      command: 'themes',
      description: 'list all available themes(coming soon!)',
    },
  ];

  return (
    <>
      <RenderCommand commands={commands} />
      <KeyboardShortcuts />
    </>
  );
};

export default Help;
