import RenderCommand from '../RenderCommand/RenderCommand';

const Socials = () => {
  const socialsCommand = [
    {
      command: 'LinkedIn',
      description: 'www.linkedin.com/in/parwar-h-6a48a226b',
      url: 'www.linkedin.com/in/parwar-h-6a48a226b',
    },
    {
      command: 'Github',
      description: 'https://github.com/parwarr',
      url: 'https://github.com/parwarr',
    },
  ];
  return (
    <>
      <RenderCommand commands={socialsCommand} />
    </>
  );
};

export default Socials;
