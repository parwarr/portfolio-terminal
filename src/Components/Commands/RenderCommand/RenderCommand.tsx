import { TypingEffect } from '../../TypingEffect/TypingEffect';

interface CommandProp {
  commands: string[];
}

const RenderCommand = ({ commands }: CommandProp) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      {commands.map((command, index) => (
        <div key={index} className='flex flex-row items-start justify-start mb-3'>
          <TypingEffect text={command} speed={50} />
        </div>
      ))}
    </div>
  );
};

export default RenderCommand;
