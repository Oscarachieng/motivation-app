import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import TopBar from './components/topbar/TopBar';

export default function App() {
  return (
    <div>
      {/* <h1>Motivation app</h1>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes> */}
    <TopBar/>
    </div>
  )
}

