import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import User from './components/pages/User/User';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:login' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
