import React from 'react'
import './App.css'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App