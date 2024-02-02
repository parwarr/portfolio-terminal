import { useEffect, useState } from 'react';

export const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};
