interface CommandProp {
  commands: {
    command: string;
    description: string;
    url?: string;
  }[];
}

const RenderCommand = ({ commands }: CommandProp) => {
  return (
    <>
      <div className='container'>
        <div className='flex flex-col items-start justify-start'>
          {commands.map((command, index) => (
            <div key={index} className='flex flex-row items-start justify-start'>
              <p className='text-white text-xl'>{command.command}</p>
              <p className='text-white text-xl font-bold pr-2'>:</p>
              {command.url ? (
                <a href={command.url} target='_blank' rel='noopener noreferrer' className='text-white text-xl'>
                  {command.description}
                </a>
              ) : (
                <p className='text-white text-xl'>{command.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RenderCommand;
