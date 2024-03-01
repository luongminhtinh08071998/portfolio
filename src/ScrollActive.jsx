// ScrollActive.js

import { useState, useEffect } from 'react';

const ScrollActive = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentNav = document.querySelector(`.nav__menu a[href="#${currentSection}"]`);
    if (currentNav) {
      document.querySelectorAll('.nav__menu a').forEach(nav => {
        nav.classList.remove('active-link');
      });
      currentNav.classList.add('active-link');
    }
  }, [currentSection]);

  return null;
};

export default ScrollActive;
