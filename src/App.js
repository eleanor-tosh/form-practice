import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Feedback from './pages/Feedback.jsx'
import All from './pages/All.jsx'

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/All" element={<All />} />
          </Routes>
        </Router>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
