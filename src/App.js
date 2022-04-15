import React, { useState } from 'react';
import './App.css';
import NavBar from './components/UI/NavBar';
import Routing from './components/UI/Routing.js';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onChangeMode = () => setDarkMode(!darkMode);

  return (
    <div>
      <NavBar darkMode={darkMode} onChangeMode={onChangeMode} />
      <Routing darkMode={darkMode} />
    </div>
  );
};

export default App;
