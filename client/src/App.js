import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar'


export default function App() {
  return (
    <div>
      <h1>Motivation app</h1>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<TopBar />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </div>
  )
}

