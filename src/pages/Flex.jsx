import React from 'react'
import styles from '../styles/flex.module.css'

function Flex() {
  return (
    <div>
      <form className={styles.formflex}>
        <div className={styles.signin}>Sign In</div>
        <div className={styles.inputs}>
          <div className={styles.flexer}>
            <label>Email</label>
            <input className={styles.inputbox} placeholder="email" />
          </div>
          <div className={styles.flexer}>
            <label>Password</label>
            <input className={styles.inputbox} placeholder="password" />
          </div>
        </div>
        <div className={styles.buttondiv}>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Flex
