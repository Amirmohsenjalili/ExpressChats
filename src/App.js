import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

// Component
import Login from './components/Login';
import TextLinkExample from './components/Navbar'
import Profile from './components/Profile';
import ChatDetails from './components/ChatDetails';
import ChatRoom1 from './components/ChatRoom1';

const App = () => {
  return (

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ChatRoom' element={<ChatRoom1 />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>

      );
};

export default App; 