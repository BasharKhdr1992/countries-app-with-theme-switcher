import React from 'react';

const Info = ({ title, text, color, styles }) => {
  return (
    <div className="info-line" style={styles}>
      <p className={`info-title ${color}`}>{title}</p>
      <p className={`info-text`}>{text}</p>
    </div>
  );
};

export default Info;
