
import React from "react";
import About from "../pages/About.js";
import Home from '../pages/Home.js'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './../styles/App.css';


const App = () => {
  return (
    <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">about</Link></li>
          </ul>
        </nav>
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>   

    </div>
  )
}

export default App
