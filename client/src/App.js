import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import { red } from '@material-ui/core/colors';

export default function App() {
  const mystyles ={
    background:"#001E2A",
    textAlign:"center",
    padding: 10,
    textTransform:"uppercase",
    color:"#FF8C00",
    marginBottom: 30,
  }
  return (
    <div>
      <h1 style={mystyles}>Motivation app</h1> 
       <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    {/* <TopBar/>
    <Sidebar /> */}
    </div>
  )
}

