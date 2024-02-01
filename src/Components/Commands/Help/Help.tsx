// Card.js

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
      <div className='container '>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-2xl font-bold'>List of commands</p>
            <div className='flex flex-col items-center justify-center'>
              {commands.map((command, index) => (
                <div key={index} className='flex flex-row items-center justify-center'>
                  <p className='text-white text-2xl font-bold'>{command.command}</p>
                  <p className='text-white text-2xl font-bold'> - {command.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
