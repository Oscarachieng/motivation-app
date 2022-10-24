import React from 'react';
import { Routes,Route } from 'react-router-dom';
// import TopBar from './components/topbar/TopBar';
// import Sidebar from './components/sidebar/Sidebar';

import Login from './components/Login/Login';


export default function App() {
  return (
    <div>
      {/* <h1>Motivation app</h1>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/" element={<Login />} />
      </Routes> */}
    <TopBar/>
    <Sidebar />
    </div>
  )
}

