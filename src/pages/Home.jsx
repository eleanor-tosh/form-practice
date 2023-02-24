import React from 'react'
import '../styles/nav.css'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/images/form-photo.avif"
          alt="a paper form that someone is filling out"
          className="home-form"
        />
        <p>Form practice!</p>
        <p>
          I have used module.css so that each page will use its own CSS file. No
          frameworks, just plain CSS.
        </p>
      </header>
    </div>
  )
}

export default Home
