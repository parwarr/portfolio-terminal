import React, { useState } from 'react';
import About from '../Commands/About/About';
import Help from '../Commands/Help/Help';
import Projects from '../Commands/Projects/Project';
import Skills from '../Commands/Skills/Skills';
import Socials from '../Commands/Social/Social';
import './typingAnimation.css';

const InputField: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const onCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = (e.target as HTMLInputElement).value.toLowerCase().trim();
      switch (command) {
        case 'help':
          setShowHelp(true);
          setShowAbout(false);
          setShowSkills(false);
          setShowProjects(false);
          setShowSocial(false);
          break;
        case 'about':
          setShowHelp(false);
          setShowAbout(true);
          setShowSkills(false);
          setShowProjects(false);
          setShowSocial(false);
          break;
        case 'skills':
          setShowHelp(false);
          setShowAbout(false);
          setShowSkills(true);
          setShowProjects(false);
          setShowSocial(false);
          break;
        case 'projects':
          setShowHelp(false);
          setShowAbout(false);
          setShowSkills(false);
          setShowProjects(true);
          setShowSocial(false);
          break;
        case 'social':
          setShowHelp(false);
          setShowAbout(false);
          setShowSkills(false);
          setShowProjects(false);
          setShowSocial(true);
          break;
        default:
          setShowHelp(false);
          setShowAbout(false);
          setShowSkills(false);
          setShowSocial(false);
          setShowProjects(false);
      }
      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className='font-mono'>
      <div className='w-full p-4'>
        <div>
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
          {showProjects && (
            <div className='revealTextAnimation'>
              <Projects />
            </div>
          )}
          {showSocial && (
            <div className='revealTextAnimation'>
              <Socials />
            </div>
          )}
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
