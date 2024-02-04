interface CommandProp {
  commands: {
    command: string;
    description: string;
    url?: string;
  }[];
}

const RenderCommand = ({ commands }: CommandProp) => {
  return (
    <div className='container mr-auto p-4'>
      <div className='space-y-2'>
        {commands.map((command, index) => (
          <div key={index} className='flex'>
            <p className='text-white text-[15px] font-bold flex-shrink-0 w-32'>{command.command}:</p>
            <div className='flex-grow'>
              {command.url ? (
                <a href={command.url} target='_blank' rel='noopener noreferrer' className='text-white text-[10px]'>
                  {command.description}
                </a>
              ) : (
                <p className='text-white text-xl'>{command.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderCommand;
