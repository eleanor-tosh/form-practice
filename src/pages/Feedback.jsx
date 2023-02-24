import React from 'react'
import styles from '../styles/feedback.module.css'

function Feedback() {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.img}
          src="/images/basic-feedback.png"
          alt="feedback form to replicate"
        />
      </div>
      {/* Form */}
      <div>
        <div className={styles.formpg}>
          <form>
            <h2 className={styles.h2}>FEEDBACK FORM</h2>
            <input
              type="string"
              placeholder="Name"
              className={styles.input}
            ></input>
            <input
              type="string"
              placeholder="Email"
              className={styles.input}
            ></input>
            <input
              type="string"
              placeholder="Subject"
              className={styles.input}
            ></input>
            <input
              className={`${styles.input} ${styles.textarea}`}
              type="textarea"
              placeholder="Message"
            ></input>
            <button className={styles.btngrad}>SUBMIT</button>
          </form>
        </div>
        <div className={styles.note}>
          <p>
            Most challenging aspects: I hadn't done a gradient before on a
            button or on a background. I couldn't find the correct font.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
