import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

// Component
import Login from './components/Login';
import Profile from './components/Profile';
import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';

// Redux 
import store from './redux/store';



const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ChatList' element={<ChatList />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/ChatList/:id' element={<ChatRoom />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
     </Provider>

      );
};

export default App; 