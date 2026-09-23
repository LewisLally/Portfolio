import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { MyExperience } from './MyExperience';
import { MyQualifications } from './MyQualifications';
import { ContactMe } from './ContactMe';

import './App.css';


function App() {
  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="nav-bar">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/MyExperience')}>My Expreience</button>
        <button onClick={() => navigate('/MyQualifications')}>My Qualifications</button>
        <button onClick={() => navigate('/ContactMe')}>Contact Me</button>
      </nav>

      <div className="hiya">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MyExperience' element={<MyExperience />} />
          <Route path='/MyQualifications' element={<MyQualifications />} />
          <Route path='/ContactMe' element={<ContactMe />} />
          {/* <Route path='/weather/:date' element={<WeatherDetail />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;