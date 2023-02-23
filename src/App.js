import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

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
          </Routes>
        </Router>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
