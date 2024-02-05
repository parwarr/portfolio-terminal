import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import About from '../Commands/About/About';
import Help from '../Commands/Help/Help';
import Projects from '../Commands/Projects/Project';
import Skills from '../Commands/Skills/Skills';
import Socials from '../Commands/Social/Social';
import Contact from '../Contact/Contact';

const InputField: React.FC = () => {
  const [inputHistory, setInputHistory] = useState<
    Array<{ command: string; component: JSX.Element | null }>
  >([]);
  const terminalUser = 'visitor';
  const terminalHost = 'terminal.parwar.dev';

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
      case 'socials':
        return <Socials />;
      case 'contact':
        return <Contact />;
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

  const inputRefCallback = (node: HTMLInputElement) => {
    if (node) {
      window.scrollTo({
        top: node.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  const onCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = (e.target as HTMLInputElement).value.toLowerCase().trim();
      const outputComponent = executeCommand(command);

      setInputHistory((currentHistory) => [
        ...currentHistory,
        { command, component: outputComponent },
      ]);

      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className='font-mono'>
      <div className='w-full p-4'>
        <div>
          {inputHistory.map((item, index) => (
            <div key={index} className='revealTextAnimation'>
              <div className='flex flex-row items-start m-3'>
                <p className='text-orange-400 font-bold'>{terminalUser}</p>
                <p className='text-white font-bold'>@</p>
                <p className='text-green-400 font-bold'>{terminalHost}</p>
                <p className='text-white font-bold'>:</p>
                <p className='text-white font-bold'>~$</p>
                <p className='text-custom-green font-bold ml-2'>
                  {' '}
                  {item.command}
                </p>
              </div>
              {item.component}
            </div>
          ))}
        </div>
        <div className='flex flex-row items-start m-3'>
          <p className='text-orange-400 font-bold'>{terminalUser}</p>
          <p className='text-white font-bold'>@</p>
          <p className='text-green-400 font-bold'>{terminalHost}</p>
          <p className='text-white font-bold'>:</p>
          <p className='text-white font-bold'>~$</p>
          <input
            className='ml-2 bg-transparent text-white font-bold focus:outline-none w-full'
            type='text'
            onKeyDown={onCommand}
            autoFocus={true}
            ref={inputRefCallback}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
