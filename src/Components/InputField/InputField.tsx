import { useState } from 'react';
import Help from '../Commands/Help/Help';

const InputField = () => {
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const onCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = (e.target as HTMLInputElement).value;
      if (command.trim().toLowerCase() === 'help') {
        setShowHelp(true);
      } else {
        setShowHelp(false);
      }
      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className='container'>
      <div className=''>{showHelp && <Help />}</div>

      <div className='flex flex-row items-center justify-center'>
        <p className='text-white text-2xl font-bold'>root@parwar:~$</p>
        <input
          className='bg-transparent text-white text-2xl font-bold focus:outline-none'
          type='text'
          onKeyDown={onCommand}
        />
      </div>
    </div>
  );
};

export default InputField;
