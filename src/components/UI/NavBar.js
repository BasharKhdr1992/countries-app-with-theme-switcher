import React from 'react';
import Button from '../UI/Button';
import { MdOutlineDarkMode } from 'react-icons/md';
import './NavBar.css';

const NavBar = ({ darkMode, onChangeMode }) => {
  let elementBg, color;

  if (darkMode) {
    elementBg = 'dark-element';
    color = 'dark-text';
  } else {
    elementBg = 'light-element';
    color = 'light-text';
  }

  return (
    <div className={`navbar ${elementBg}`}>
      <div className={`logo ${color}`}>Where in the world?</div>
      <Button
        styles={{ width: '10%', fontWeight: '600' }}
        onClick={onChangeMode}
        className={color}
        icon={<MdOutlineDarkMode />}
        text={'Dark mode'}
      />
    </div>
  );
};

export default NavBar;
