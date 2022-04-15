import React from 'react';
import './Button.css';

const Button = ({ icon, text, onClick, className, code, styles }) => {
  return (
    <div
      style={styles}
      className={`theme-btn ${className}`}
      onClick={() => {
        onClick({ name: text, code });
      }}
    >
      {icon}
      <p className="btn-text">{text}</p>
    </div>
  );
};

export default Button;
