import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header>
      <h3>Forms</h3>
      <div>
        <nav ref={navRef} className="nav-right">
          <a href="/">Home</a>
          <a href="/Feedback">Feedback-form</a>
          <a href="/All">All-form</a>
          <a href="/#">Demo-form</a>
          <a href="/Dog">Dog-form</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}
export default Navbar
