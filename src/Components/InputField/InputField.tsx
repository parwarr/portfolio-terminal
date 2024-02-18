import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CommandNotFound from '../CommandNotFound/CommandNotFound';
import About from '../Commands/About/About';
import Help from '../Commands/Help/Help';
import Projects from '../Commands/Projects/Project';
import Skills from '../Commands/Skills/Skills';
import Socials from '../Commands/Social/Social';
import Contact from '../Contact/Contact';

const InputField: React.FC = () => {
  const [inputHistory, setInputHistory] = useState<Array<{ command: string; component: JSX.Element | string }>>([]);
  const [multiCommand, setMultiCommand] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const terminalUser = 'visitor';
  const terminalHost = 'terminal.parwar.dev';
  const commandsList = ['help', 'about', 'skills', 'projects', 'socials', 'contact', 'welcome', 'clear', 'gui'];

  const executeCommand = (command: string): JSX.Element | string => {
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
      case 'gui':
        return '';
      case 'clear':
        setInputHistory([]);
        setMultiCommand([]);
        return '';
      default:
        return <CommandNotFound />;
    }
  };

  useEffect(() => {
    setInputHistory([{ command: 'welcome', component: <Banner /> }]);
  }, []);

  useEffect(() => {
    setMultiCommand([]);
  }, [inputHistory]);

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
      e.preventDefault();
      const command = (e.target as HTMLInputElement).value.toLowerCase().trim();
      const outputComponent = executeCommand(command);
      setHistoryIndex(null);
      setInputHistory(currentHistory => [...currentHistory, { command, component: outputComponent }]);

      (e.target as HTMLInputElement).value = '';
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setInputHistory([]);
      setMultiCommand([]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentInput = (e.target as HTMLInputElement).value.toLowerCase().trim();
      const matchedCommands = commandsList.filter(cmd => cmd.startsWith(currentInput));
      if (matchedCommands.length > 1) {
        const displayCommands = matchedCommands.join(' ');

        setMultiCommand([displayCommands]);
      } else if (matchedCommands.length > 0) {
        (e.target as HTMLInputElement).value = matchedCommands[0];
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = historyIndex !== null ? Math.max(historyIndex - 1, 0) : inputHistory.length - 1;
      setHistoryIndex(newIndex);
      (e.target as HTMLInputElement).value = inputHistory[newIndex]?.command || '';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== null) {
        const newIndex = historyIndex + 1;
        if (newIndex < inputHistory.length) {
          setHistoryIndex(newIndex);
          (e.target as HTMLInputElement).value = inputHistory[newIndex].command;
        } else {
          setHistoryIndex(null);
          (e.target as HTMLInputElement).value = '';
        }
      }
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
                <p className='text-custom-green font-bold ml-2'> {item.command}</p>
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
            className='ml-2 bg-transparent text-white font-bold focus:outline-none w-full caret-custom-green'
            type='text'
            onKeyDown={onCommand}
            autoFocus={true}
            ref={inputRefCallback}
          />
        </div>
        {multiCommand && multiCommand.length > 0 && <p className='text-custom-green font-bold m-3'>{multiCommand}</p>}
      </div>
    </div>
  );
};

export default InputField;
