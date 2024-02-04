import RenderCommand from '../Commands/RenderCommand/RenderCommand';

const Contact = () => {
  const mailCommand = {
    command: 'Email',
    description: 'parwar-habasch@gmx.de',
  };

  const mailTo = () => {
    window.open('mailto:' + 'parwar.habasch@gmx.de', '_self');
  };

  return (
    <>
      <RenderCommand commands={[mailCommand]} />
      {mailTo()}
    </>
  );
};

export default Contact;
