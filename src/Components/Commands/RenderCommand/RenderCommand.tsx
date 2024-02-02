interface CommandProp {
  commands: {
    command: string;
    description: string;
  }[];
}

const RenderCommand = ({ commands }: CommandProp) => {
  return (
    <>
      <div className='container '>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            {commands.map((command, index) => (
              <div key={index} className='flex flex-row items-center justify-center mb-3'>
                <p className='text-white text-lg font-bold'>{command.command}</p>
                <p className='text-white text-lg font-bold px-2'>{'-'}</p>
                <p className='text-white text-lg font-bold'>{command.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderCommand;
