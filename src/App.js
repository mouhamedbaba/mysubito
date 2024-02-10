import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeSubito } from './pages/Home';
import './App.css';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';


const App = () => {
  return (
    <Router>
      <Routes>
        < Route path="/" exact element={<HomeSubito />} />
        < Route path="auth/login"  element={<SignIn/>} />
        < Route path="auth/register" element={<SignUp/>} />

      </Routes>
    </Router>
  );
};

export default App;
