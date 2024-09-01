import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Header';
import './App.css';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Stdreg from './Stdreg';
import Instreg from './Instreg';
import Stdinfo from './Stdinfo';
import Instinfo from './Instinfo';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/learners-academy" element={<Home />} />
          <Route path="/learners-academy/Home" element={<Home />} />
          <Route path="/learners-academy/About" element={<About />} />
          <Route path="/learners-academy/Register" element={<Register />} />
          <Route path="/learners-academy/Login" element={<Login />} />
          <Route path="/learners-academy/Stdreg" element={<Stdreg />} />
          <Route path="/learners-academy/Instreg" element={<Instreg />} />
          <Route path="/learners-academy/Stdinfo" element={<Stdinfo />} />
          <Route path="/learners-academy/Instinfo" element={<Instinfo />} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
