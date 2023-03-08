import React, { useState, useEffect } from 'react';
import './progress-bar.sass';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = (windowScrollTop / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
  );
};

export default ProgressBar;