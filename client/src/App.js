import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <div>
      <h1>Motivation app</h1>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

