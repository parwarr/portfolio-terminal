import React, { useState } from 'react';
import About from '../Commands/About/About';
import Help from '../Commands/Help/Help';
import Skills from '../Commands/Skills/Skills';
import './typingAnimation.css';

const InputField: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const onCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = (e.target as HTMLInputElement).value.toLowerCase().trim();
      switch (command) {
        case 'help':
          setShowHelp(true);
          setShowAbout(false);
          setShowSkills(false);
          break;
        case 'about':
          setShowHelp(false);
          setShowAbout(true);
          setShowSkills(false);
          break;
        case 'skills':
          setShowHelp(false);
          setShowAbout(false);
          setShowSkills(true);
          break;
        default:
          setShowHelp(false);
          setShowAbout(false);
          setShowSkills(false);
      }
      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-black text-white font-mono w-full'>
      <div className='w-full max-w-xl p-4'>
        {showHelp && (
          <div className='revealTextAnimation'>
            <Help />
          </div>
        )}
        {showAbout && (
          <div className='revealTextAnimation'>
            <About />
          </div>
        )}
        {showSkills && (
          <div className='revealTextAnimation'>
            <Skills />
          </div>
        )}
        <div className='flex flex-row items-center m-3'>
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
