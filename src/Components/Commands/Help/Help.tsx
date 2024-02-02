import RenderCommand from '../RenderCommand/RenderCommand';

const Help = () => {
  const commands = ['help', 'about', 'skills'];

  return (
    <>
      <RenderCommand commands={commands} />
    </>
  );
};

export default Help;
