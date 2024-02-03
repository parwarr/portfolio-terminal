import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import About from '../Commands/About/About';
import Help from '../Commands/Help/Help';
import Projects from '../Commands/Projects/Project';
import Skills from '../Commands/Skills/Skills';
import Socials from '../Commands/Social/Social';

const InputField: React.FC = () => {
  const [inputHistory, setInputHistory] = useState<Array<{ command: string; component: JSX.Element | null }>>([]);

  const executeCommand = (command: string): JSX.Element | null => {
    switch (command) {
      case 'help':
        return <Help />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'social':
        return <Socials />;
      case 'contact':
        return <></>;
      case 'welcome':
        return <Banner />;
      case 'clear':
        setInputHistory([]);
        return null;
      default:
        return null;
    }
  };

  useEffect(() => {
    setInputHistory([{ command: 'welcome', component: <Banner /> }]);
  }, []);

  const onCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = (e.target as HTMLInputElement).value.toLowerCase().trim();
      const outputComponent = executeCommand(command);

      setInputHistory(currentHistory => [...currentHistory, { command, component: outputComponent }]);

      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className='font-mono'>
      <div className='w-full p-4'>
        <div>
          {inputHistory.map((item, index) => (
            <div key={index} className='revealTextAnimation'>
              <p className='text-green-400 text-2xl font-bold'>root@parwar:~$ {item.command}</p>
              {item.component}
            </div>
          ))}
        </div>
        <div className='flex flex-row items-start m-3'>
          <p className='text-green-400 text-2xl font-bold'>root@parwar:~$</p>
          <input
            className='ml-2 bg-transparent text-white text-2xl font-bold focus:outline-none w-full'
            type='text'
            onKeyDown={onCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
