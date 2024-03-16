import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeSubito } from './pages/v1/Home';
import './App.css';
import { SignIn } from './pages/v1/SignIn';
import { SignUp } from './pages/v1/SignUp';
import { Vehicules } from './pages/v1/Vehicules';
import { NotFound } from './pages/v1/404';
import { Contacts } from './pages/v1/contacts';
import { Index } from './pages/v2';


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





        <Route path="/v2" element={<Index/>}  />
      </Routes>
    </Router>
  );
};

export default App;
