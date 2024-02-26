import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeSubito } from './pages/Home';
import './App.css';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Vehicules } from './pages/Vehicules';
import { NotFound } from './pages/404';
import { Contacts } from './pages/contacts';


const App = () => {
  return (
    <Router>
      <Routes>
        < Route path="/" exact element={<HomeSubito />} />
        < Route path="auth/login"  element={<SignIn/>} />
        < Route path="auth/register" element={<SignUp/>} />
        <Route path="/vehicule" element={<Vehicules/>} />
        <Route path="*" element={<NotFound/> }  />
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
    </Router>
  );
};

export default App;
