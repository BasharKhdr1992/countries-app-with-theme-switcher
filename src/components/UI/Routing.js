import React from 'react';
import Home from '../Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Country from '../Country';

const Routing = ({ darkMode }) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/:cname" element={<Country darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
