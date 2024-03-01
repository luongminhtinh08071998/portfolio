import { useState, useEffect } from 'react';
import { BiHomeAlt2, BiUser, BiMessageRounded, BiCaretRightCircle, BiMoon, BiSun } from "react-icons/bi";

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme) {
      setTheme(selectedTheme);
      document.body.classList.toggle('light-theme', selectedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('light-theme', newTheme === 'light');
    localStorage.setItem('selected-theme', newTheme);
  };

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <div>
      <header id='header' className='header'>
        <nav className="nav container grid">
          <a href="#" className="nav-logo">MINH TINH</a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <BiHomeAlt2 />
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <BiUser />
                </a>
              </li>

              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <BiCaretRightCircle />
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <BiMessageRounded />
                </a>
              </li>
            </ul>
          </div>
          {theme === 'light' ? (
            <BiMoon className="change-theme" id="theme-button" onClick={toggleTheme} />
          ) : (
            <BiSun className="change-theme" id="theme-button" onClick={toggleTheme} />
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
