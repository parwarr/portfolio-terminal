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
            <p className='text-custom-green font-bold flex-shrink-0 w-32'>{command.command}</p>
            <p className='mr-3'>-</p>
            <div className='flex-grow'>
              {command.url ? (
                <a href={command.url} target='_blank' rel='noopener noreferrer' className='text-white '>
                  {command.description}
                </a>
              ) : (
                <p className='text-white'>{command.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderCommand;
