import React from 'react'
import '../styles/feedback.css'

function Feedback() {
  return (
    <div className="container">
      <div>
        <img
          src="/images/basic-feedback.png"
          alt="feedback form to replicate"
        />
      </div>
      {/* Form */}
      <div>
        <div className="form-pg">
          <form>
            <h2>FEEDBACK FORM</h2>
            <input type="string" placeholder="Name"></input>
            <input type="string" placeholder="Email"></input>
            <input type="string" placeholder="Subject"></input>
            <input
              className="textarea"
              type="textarea"
              placeholder="Message"
            ></input>
            <button className="btn-grad">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feedback
