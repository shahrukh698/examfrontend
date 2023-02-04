import React from 'react'
import { Routes, Route } from "react-router-dom";
import LSNavbar from '../header/LSNavbar';
import Signup from './Signup';
import Login from './Login';
function Signb() {
  return (
    <div className="app">
        <LSNavbar/>
    <Routes>
        
        
        {<Route path="/signup" element={<Signup />} /> }
        { <Route path="/login" element={<Login />} /> }
      

        
      </Routes>
      </div>
  )
}

export default Signb;